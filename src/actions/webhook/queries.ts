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

export const getChatHistory = (
    sender:string,
    reciever:string
) => {
    return client.automation.findMany({
        where:{
            dms:{
                some:{
                    senderId:sender,
                    reciever:reciever
                }
            }
        }
    })
}