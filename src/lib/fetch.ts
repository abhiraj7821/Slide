import axios from 'axios'
import { client } from './prisma'


export const refreshToken = async (token: string)=>{
    const refreshToken =await axios.get(`${process.env.INSTAGRAM_BASE_URL}/refresh_access_token?grant_type=ig_refresh_token&access_token=${token}`)
    return refreshToken.data
}


export const sendDM = async (
    userId:string,
    recieverId: string,
    // Message
    prompt: string,
    token:string,
) =>{
    console.log("Sending message");
    return await axios.post(`${process.env.INSTAGRAM_BASE_URL}/v21.0/${userId}/messages`,
        {
            recipient:{
                id:recieverId,
            },
            message:{
                text: prompt,
            }
        },
        {
            headers:{
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        }
    )
    
}


export const getKeywordPost = async (postId:string, automationId:string)=>{
    return await client.post.findFirst({
        where:{
            AND:[{postid:postId},{automationId}],
        },
        select:{automationId:true},
    })
}