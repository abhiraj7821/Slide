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