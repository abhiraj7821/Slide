import { TbSettingsAutomation } from "react-icons/tb";
import { IoIosContacts } from "react-icons/io";
import { MdOutlineIntegrationInstructions } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";

import { RiHome9Fill } from "react-icons/ri";



export const PAGE_BREAD_CRUMBS: string[] = [
    'home',
    'contacts',
    'automations',
    'integrations',
    'setting',
]

type Props = {
    [page in string] : React.ReactNode
}

export const PAGE_ICON : Props = {
    AUTOMATIONS : <TbSettingsAutomation/> ,
    CONTACTS : <IoIosContacts />,
    INTEGRATIONS: <MdOutlineIntegrationInstructions/>,
    SETTING: <IoMdSettings/>,
    HOME: <RiHome9Fill/>,
}



export const PLANS = [
{
    name: 'Free Plan',
    description: 'Perfect for getting started',
    price: '$0',
    features: [
        'Boost engagement with target responses',
        'Automate comment replies to enhance audience interaction',
        'Turn followers into customers with targeted messaging',
    ],
    cta: 'Get Started',
},
{
    name: 'Smart AI Plan',
    description: 'Advanced features for power users',
    price: '$99',
    features: [
        'All features from Free Plan',
        'AI-powered response generation',
        'Advanced analytics and insights',
        'Priority customer support',
        'Custom branding options',
    ],
    cta: 'Upgrade Now',
},
]