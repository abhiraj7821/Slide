import {v4 as uuid} from 'uuid'
import { TiHome} from "react-icons/ti";
import { MdIntegrationInstructions } from "react-icons/md";
import { TbSettingsAutomation } from "react-icons/tb";
import { IoIosSettings } from "react-icons/io";



export type FieldProps = {
    label:string
    id:string
}

type SideBarProps = {
    icon: React.ReactNode
} & FieldProps
export const SIDEBAR_MENU : SideBarProps[] = [
    {
        id: uuid(),
        label:'home',
        icon:<TiHome/>,
    },
    {
        id:uuid(),
        label:'automations',
        icon:<TbSettingsAutomation/>
    },
    {
        id:uuid(),
        label:'integrations',
        icon:<MdIntegrationInstructions/>
    },
    {
        id:uuid(),
        label:'setting',
        icon:<IoIosSettings/>
    }

]