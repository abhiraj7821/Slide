import React from "react"
import { FaPaperPlane } from "react-icons/fa"
import { LuBrainCircuit } from "react-icons/lu"
import { v4 } from "uuid"
import { AiFillInstagram } from "react-icons/ai";

export type AutomationListenerProps = {
    id:string,
    label:string,
    icon: React.ReactNode,
    description : string,
    type: 'SMARTAI' | 'MESSAGE'
}

export type AutomationsTriggerProps ={
    id:string,
    label:string,
    icon: React.ReactNode,
    description : string,
    type: 'COMMENT' | 'DM'
}

export const AUTOMATION_TRIGGERS:AutomationsTriggerProps[] = [
    {
        id : v4(),
        label: 'User comments on my post',
        icon: <AiFillInstagram color="#fffff" />,
        description:"Select if you want to automate comments on your post",
        type: 'COMMENT',
    },
    {
        id : v4(),
        label: 'User sends me a dm with a keyword',
        icon: <AiFillInstagram color="#fffff"/>,
        description:"Select if you want to automate DMs on your profile",
        type: 'DM',
    },
]

export const AUTOMATION_LISTENERS : AutomationListenerProps[] = [
    {
        id : v4(),
        label: 'Send the user a message',
        icon: <FaPaperPlane color="#fffff" />,
        description:"Enter the message that you want to be sent to the user.",
        type: 'MESSAGE',
    },
    {
        id : v4(),
        label: 'Let samrt AT take over',
        icon: <LuBrainCircuit color="#fffff"/>,
        description:"Tell AI about your project. (Upgrade to use this feature)",
        type: 'SMARTAI',
    },
]

