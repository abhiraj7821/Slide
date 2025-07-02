import { client } from "@/lib/prisma"

export const matchKeyword = async (keyword:string) =>{
    return await client.keyword.findFirst({
        where:{
            word:{
                equals:keyword,
                mode:'insensitive'
            }
        }
    })
}



export const getKeywordAutomation = async (
    automationId:string,
    dm:boolean
)=>{
    return await client.automation.findUnique({
        where:{
            id:automationId
        },
        include:{
            dms:dm,
            trigger:{
                where:{
                    type: dm ? 'DM' : 'COMMENT',
                }
            },
            listener:true,
            User:{
                select:{
                    subscription:{
                        select:{
                            plan:true,

                        },
                    },
                    integrations:{
                        select:{
                            token:true,
                        }
                    }
                },
            }
        },
    })
}

export const trackResponses = async (
    automationId:string,
    type: 'COMMENT' | 'DM'
)=>{
    if(type === 'COMMENT'){
        return await client.listener.update({
            where:{automationId},
            data:{
                commentCount:{
                    increment:1,
                }
            }
        })
    }

    if(type==='DM'){
        return await client.listener.update({
            where:{automationId},
            data:{
                dmCount:{
                    increment:1,
                }
            }
        })
    }
}

export const createChatHistory = async (
    automationId:string,
    sender:string,
    reciever:string,
    message:string,
)=>{
    return client.automation.update({
        where:{
            id:automationId,
        },
        data:{
            dms:{
                create:{
                    reciever,
                    senderId: sender,
                    message,
                },
            },
        },
    })
}

export async function getChatHistory(recipientId: string, senderId: string) {
    try {
        // Fetch chat history between the specified recipient and sender
        const messages = await client.dms.findMany({
            where: {
                OR: [
                    // Messages sent by recipient to sender
                    { senderId: recipientId, reciever: senderId },
                    // Messages sent by sender to recipient
                    { senderId: senderId, reciever: recipientId }
                ]
            },
            orderBy: { createdAt: "asc" },
            select: {
                message: true,
                senderId: true,
                automationId: true
            }
        });

        if (messages.length === 0) {
            return { history: [], automationId: null };
        }

        // Find the first valid automationId in the conversation
        const automationId = messages.find(msg => msg.automationId)?.automationId || null;

        // Format messages for OpenAI API
        const history = messages.map(msg => ({
            role: msg.senderId === recipientId ? "assistant" as const : "user" as const,
            content: msg.message || ""
        }));

        return { history, automationId };
    } catch (error) {
        console.error("Error fetching chat history:", error);
        return { history: [], automationId: null };
    }
}