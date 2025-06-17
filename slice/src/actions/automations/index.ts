"use server"
import { onCurrentUser } from "../user"
import { createAutomation, getAutomation } from "./queries"

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
        return {satus:500,data:[]}
    }
}