'use server'

import { client } from "@/lib/prisma"

export const updateIntegration = async (token:string, expire: Date, id:string)=>{
    try {
        return await client.integrations.update({
            where:{id},
            data:{
                token,
                expiresAt:expire,
            },
        })
    } catch (error) {
        console.log("Error at update Integrations",error);
    }
}

export const getIntegration = async (clerkId:string)=>{
    return await client.user.findUnique({
        where:{
            clerkId,
        },
        select:{
            integrations:{
                where:{
                    name:'INSTAGRAM',
                }
            }
        }
    })
}

export const createIntegration = async (
    clerkId:string,
    token:string,
    expire: Date,
    instaId:string,
)=>{
    try {
        return await client.user.update({
            where:{
                clerkId,
            },
            data:{
                integrations:{
                    create:{
                        token,
                        expiresAt:expire,
                        instagramId: instaId,
                    }
                }
            },
            select:{
                firstname:true,
                lastname:true,
            }
        })
    } catch (error) {
        console.log("Error at create Integrations",error);
    }
}