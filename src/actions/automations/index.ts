"use server"
import { onCurrentUser } from "../user"
import { findUser } from "../user/quires"
import { addKeyword, addListener, addPost, addTrigger, createAutomation, findAutomation, getAutomation, removeKeyword, updateAutomation } from "./queries"

export const createAutomations = async (id?:string)=>{
    const user = await onCurrentUser()
    try {
        const create = await createAutomation(user.id,id)

        if(create)
            return {status:200,data:'Automation created'}
        
        return {status:404, data:'Oops! something went wrong!'}
    } catch (error) {
        console.log(error);
        return {status:500,data:"Internal Server error"}
    }
}

export const getAllAutomations = async ()=>{
    const user =  await onCurrentUser()
    try {
        const automations = await getAutomation(user.id)

        if(automations)
            return {status:200,data:automations.automations}
        return {status:404,data:[]}
    } catch (error) {
        console.log(error);
        return {status:500,data:[]}
    }
}

export const getAutomationInfo = async (id:string)=>{
    await onCurrentUser()
    try {
        const automation = await findAutomation(id)
        if(automation)
            return {status:200,data:automation}
        return{status:404}
    } catch (error) {
        console.log("Error at getAutomationInfo",error);
        return {status:500}
    }
}

export const updateAutomationName = async (
    automationId : string,
    data: {
        name?: string
        active?: boolean
        automation?: string
    }
)=>{
    await onCurrentUser()
    try {
        const update = await updateAutomation(automationId,data)
        if(update){
            return {status:200,data:'Automation successfully updated'}
        }
        return {status:404,data:"Error at updateAutomation"}
    } catch (error) {
        console.log(error);
        return {status:500,data:"Error at updateAutomation"}
    }
}



// Listener

export const saveListener = async (
    automationId:string,
    listener : 'SMARTAI' | 'MESSAGE',
    prompt: string,
    reply?: string
) =>{
    await onCurrentUser()
    try {
        const create = await addListener(automationId,listener,prompt,reply)
        if(create)
            return {status:200,data:'Listeners created'}
        return {status:404,data:'Cant save listener'}
    } catch (error) {
        console.log(error);
        return {status:500,data:'Error at saving listener'}
    }
}

export const saveTrigger  = async (automationId : string, trigger: string[])=>{
    await onCurrentUser()
    try {
        const create = await addTrigger(automationId,trigger)
        if(create) return {status:200,data:'Trigger saved'}
        return {status:404,data:'Cannot save trigger'}
    } catch (error) {
        console.log(error);
        return {status:500,data:'Oops! Error At saving trigger'}
    }
}


// Keyword related actions
export const saveKeyword = async (automationId:string, keyword:string) =>{
    await onCurrentUser()
    try {
        const create = await addKeyword(automationId, keyword)
        if (create) return {status:200,data:"Keyword added successfully"}
        return {status:404, data:"Can not add this keyword"}
    } catch (error) {
        console.log(error);
        return {status:500,data:"Oops! can not add keyword"}
    }
}

export const deleteKeyword = async (id:string) => {
    await onCurrentUser()
    try {
        const deleted = await removeKeyword(id)
        if (deleted) return {status:200, data:"Keyword removed successfuly"}
        return {status:404,data:"Can not delete this keyword"}
    } catch (error) {
        console.log(error);
        return {status:500,data:"Oops! can not delete keyword"}
        
    }
}


export const getProfilePosts = async () =>{
    const user = await onCurrentUser()
    try {
        const profile = await findUser(user.id)
        const posts = await fetch(
            `${process.env.INSTAGRAM_BASE_URL}/me/media?fields=id,caption,media_url,media_type,timestamp&limit=10&access_token=${profile?.integrations[0].token}`
        )
        const parsed = await posts.json();
        if(parsed) return {status: 200, data:parsed}
        return {status:404,data:"Error at getProfilePosts"}
    } catch (error) {
        console.log(error);
        return {status:500,data:"Oops! cant get profile posts"}
    }
}

export const savePosts = async (
    automationId:string,
    posts:{
        postid:string 
        caption?:string
        media:string
        mediaType: 'IMAGE' | 'VIDEO' | 'CAROSEL_ALBUM'
    }[]
) =>{
    await onCurrentUser()
    try {
        const create = await addPost(automationId,posts)
        if (create) return {status:200,data:'Posts attached'}

        return {status:404,data:"Automation not found error at savePosts"}
    } catch (error) {
        console.log(error);
        return {status:500,data:"Oops! Server side error at savePosts"}
    }
}