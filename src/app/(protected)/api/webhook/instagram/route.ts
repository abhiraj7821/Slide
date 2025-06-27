import { findAutomation } from "@/actions/automations/queries";
import { createChatHistory, getKeywordAutomation, matchKeyword, trackResponses } from "@/actions/webhook/queries";
import { getKeywordPost, sendDM } from "@/lib/fetch";
import { client } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
const openai = new OpenAI();

export async function GET(req:NextRequest){
    const hub = req.nextUrl.searchParams.get("hub.challenge");
    return new NextResponse(hub);
}


export async function POST(req:NextRequest){
    const webhook_payload = await req.json()
    let matcher
    try {
        if(webhook_payload.entry[0].messaging){
            matcher = await matchKeyword(webhook_payload.entry[0].messaging[0].message.text)
        }

        if(webhook_payload.entry[0].changes){
            matcher = await matchKeyword(webhook_payload.entry[0].changes[0].value.text)
        }

        // If keyword matched

        if(matcher && matcher.automationId){
            // We have the keyword matcher

            if(webhook_payload.entry[0].messaging){
                
                const automation = await getKeywordAutomation (
                    matcher.automationId,
                    true
                )

                if(automation && automation.trigger) {
                    if(automation.listener && automation.listener.listener === 'MESSAGE'){
                        const direct_message = await sendDM(
                            webhook_payload.entry[0].id,
                            webhook_payload.entry[0].messaging[0].sender.id,
                            automation.listener?.prompt,
                            // This not work -> automation.User?.integrations[0].token!
                            automation.User?.integrations[0].token as string,
                        )

                        if(direct_message.status === 200){
                            const tracked = await trackResponses(automation.id,'DM')
                            if(tracked){
                                return NextResponse.json(
                                    {
                                        message:"Message sent",
                                    },
                                    {status:200}
                                )
                            }
                        }
                    }

                    if(
                        automation.listener && 
                        automation.listener.listener==='SMARTAI' && 
                        automation.User?.subscription?.plan==='PRO'
                    ){
                        const smart_ai_message = await openai.chat.completions.create({
                            model: 'gpt-4.1',
                            messages:[
                                {
                                    role: 'assistant',
                                    content:`${automation.listener?.prompt}: Keep responses under 2 sentences`,
                                },
                            ],
                        }) 

                        if(smart_ai_message.choices[0].message.content){
                            const reciever = createChatHistory(
                                automation.id,
                                webhook_payload.entry[0].id,
                                webhook_payload.entry[0].messaging[0].sender.id,
                                webhook_payload.entry[0].messaging[0].message.text
                            )

                            const sender = createChatHistory(
                                automation.id,
                                webhook_payload.entry[0].id,
                                webhook_payload.entry[0].messaging[0].sender.id,
                                smart_ai_message.choices[0].message.content
                            )


                            await client.$transaction([reciever,sender])

                            const direct_message = await sendDM(
                                // user id
                                webhook_payload.entry[0].id,
                                // receiver id
                                webhook_payload.entry[0].messaging[0].sender.id,
                                // prompt/message
                                smart_ai_message.choices[0].message.content,
                                // integration token
                                automation.User?.integrations[0].token
                            )

                            if(direct_message.status === 200){
                                const tracked = await trackResponses(automation.id,'DM')
                                if(tracked){
                                    return NextResponse.json(
                                        {
                                            message: 'Message sent',
                                        },
                                        { status:200 }
                                    )
                                }
                            }
                        }
                    }
                }
            }

            if( webhook_payload.entry[0].changes && webhook_payload.entry[0].changes[0].field === 'comments'){
                const automation = await getKeywordAutomation(matcher.automationId, false)

                const automation_post = await getKeywordPost(
                    webhook_payload.entry[0].changes[0].value.media.id,
                    automation?.id as string
                )

                if(automation && automation_post && automation.trigger){
                    if(automation.listener){

                        if(automation.listener.listener === 'MESSAGE'){
                            const direct_message = await sendDM(
                                webhook_payload.entry[0].id,
                                webhook_payload.entry[0].changes[0].value.from.id,
                                automation.listener?.prompt,
                                automation.User?.integrations[0].token as string
                            )
                            if(direct_message.status === 200){
                                const tracked = await trackResponses(automation.id,'COMMENT')
                                if(tracked){
                                    return NextResponse.json(
                                        {
                                            message: 'Message sent',
                                        },
                                        { status:200 }
                                    )
                                }
                            }
                        }

                        if(automation.listener.listener === 'SMARTAI' && automation.User?.subscription?.plan === 'PRO'){
                            const smart_ai_message = await openai.chat.completions.create({
                                model: 'gpt-4.1',
                                messages:[
                                    {
                                        role: 'assistant',
                                        content:`${automation.listener?.prompt}: Keep responses under 2 sentences`,
                                    },
                                ],
                            });
                            
                            if(smart_ai_message.choices[0].message.content){
                                const receiver = createChatHistory(
                                    automation.id,
                                    webhook_payload.entry[0].id,
                                    webhook_payload.entry[0].changes[0].value.from.id,
                                    webhook_payload.entry[0].changes[0].value.text
                                )

                                const sender = createChatHistory(
                                    automation.id,
                                    webhook_payload.entry[0].id,
                                    webhook_payload.entry[0].changes[0].value.from.id,
                                    smart_ai_message.choices[0].message.content
                                )

                                await client.$transaction([receiver,sender])

                                const direct_message = await sendDM(
                                    webhook_payload.entry[0].id,
                                    webhook_payload.entry[0].changes[0].value.from.id,
                                    smart_ai_message.choices[0].message.content,
                                    automation.User?.integrations[0].token
                                )

                                if(direct_message.status === 200){
                                    const tracked = await trackResponses(automation.id,'COMMENT')
                                    if(tracked) {
                                        return NextResponse.json({
                                            message:'Message sent',
                                        },
                                        {status:200}
                                    )
                                    }
                                }

                            }


                        }

                    }
                }

            }

        }

        // If keyword not matched
 
        if(!matcher){
            const customer_history = await getChatHistory(
                webhook_payload.entry[0].messaging[0].recipient.id,
                webhook_payload.entry[0].messaging[0].sender.id
            )

            if(customer_history.history.length > 0){
                const automation = await findAutomation(customer_history.automationId!)
                if(automation?.User?.subscription?.plan === 'PRO' && automation.listener?.listener === 'SMARTAI'){
                    const smart_ai_message = await openai.chat.completions.create({
                        model: 'gpt-4.1',
                        messages:[
                            {
                                role: 'assistant',
                                content:`${automation.listener?.prompt}: Keep responses under 2 sentences`,
                            },
                            ...customer_history.history,
                            {
                                role:'user',
                                content: webhook_payload.entry[0].messaging[0].message.text,
                            },
                        ],
                    });

                    if(smart_ai_message.choices[0].message.content){
                        const reciever = createChatHistory(
                            automation.id,
                            webhook_payload.entry[0].id,
                            webhook_payload.entry[0].messaging[0].sender.id,
                            webhook_payload.entry[0].messaging[0].message.text
                        )

                        const sender = createChatHistory(
                            automation.id,
                            webhook_payload.entry[0].id,
                            webhook_payload.entry[0].messaging[0].sender.id,
                            smart_ai_message.choices[0].message.content
                        )

                        await client.$transaction([reciever,sender])
                        const direct_message = await sendDM(
                            webhook_payload.entry[0].id,
                            webhook_payload.entry[0].messaging[0].sender.id,
                            smart_ai_message.choices[0].message.content,
                            automation.User.integrations[0].token
                        )

                        if(direct_message.status === 200){
                            // if successfully send we return

                            return NextResponse.json(
                                {
                                    message: 'Message Sent',
                                },
                                { status:200 }
                            )
                        }
                    }
                }
            }

            return NextResponse.json(
                { message: 'No automation set',},
                { status:404 }
            )

        }

    return NextResponse.json(
        { message: 'No automation set error at post route',},
        { status:404 }
    )

    } catch (error) {
        console.log(error);
        return NextResponse.json(
                { message: 'ERROR AT Route Post function',},
                { status:404 }
            )
    }
}