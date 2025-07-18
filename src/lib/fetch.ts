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
    return await axios.post(`${process.env.INSTAGRAM_BASE_URL}/v23.0/${userId}/messages`,
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

export const generateTokens = async (code: string)=>{
    const insta_form = new FormData()
    insta_form.append("client_id",process.env.INSTAGRAM_CLIENT_ID as string)
    insta_form.append("client_secret", process.env.INSTAGRAM_CLIENT_SECRET as string)
    insta_form.append('grant_type', 'authorization_code')
    insta_form.append('redirect_uri',`${process.env.NEXT_PUBLIC_HOST_URL}/callback/instagram`)
    insta_form.append('code',code)

    const shortTokenRes = await fetch(process.env.INSTAGRAM_TOKEN_URL as string,
        {
            method:'POST',
            body:insta_form
        }
    )

    const token = await shortTokenRes.json();
    if(token.permissions.length > 0){
        console.log(token,'got permissions');
        const long_token = await axios.get(`${process.env.INSTAGRAM_BASE_URL}/access_token?grant_type=ig_exchange_token&client_secret=${process.env.INSTAGRAM_CLIENT_SECRET}&access_token=${token.access_token}`)
        return long_token.data
    }
}

export const sendPrivateMessage = async (
    userId:string,
    recieverId: string,
    // Message
    prompt: string,
    token:string,
) =>{
    console.log("Sending message");
    return await axios.post(`${process.env.INSTAGRAM_BASE_URL}/${userId}/messages`,
        {
            recipient:{
                comment_id: recieverId, // Use comment_id for private messages
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