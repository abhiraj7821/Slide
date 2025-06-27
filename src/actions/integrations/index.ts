'use server'

import { redirect } from "next/navigation"

export const onOAuthInstagram = (stretagy:"INSTAGRAM"|"CRM") =>{
    if(stretagy==="INSTAGRAM"){
        return redirect(process.env.INSTAGRAM_EMBEDDED_OAUTH_URL as string)
    }
}