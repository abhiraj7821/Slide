import { getKeywordAutomation, matchKeyword, trackResponse } from "@/actions/webhook/queries";
import { sendDM } from "@/lib/fetch";
import { NextRequest, NextResponse } from "next/server";

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
                            const tracked = await trackResponse(automation.id,'DM')
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

                }
            }
        }
    } catch (error) {
        console.log(error);
        return {status:500,data:"ERROR AT Route Post function"}
    }
}