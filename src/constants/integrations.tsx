import { MdOutlineIntegrationInstructions } from "react-icons/md";
import { FaSalesforce } from "react-icons/fa";

type Props = {
    title : string
    icon : React.ReactNode
    description : string
    strategy : 'INSTAGRAM' | 'CRM'
}


export const INTEGRATION_CARDS : Props[] = [
    {
        title: 'Connect Instagram',
        description:'Transform Your Instagram Engagement with slide',
        icon: <MdOutlineIntegrationInstructions/>,
        strategy: 'INSTAGRAM',
        // FUNCTION TO INTEGRATE TO INSTAGRAM
    },
    {
        title: 'Connect Salesforce',
        description: 'Lorem ipsum dolor sit amet consectetur. Mauris scelerisque tincidunt ultrices',
        icon: <FaSalesforce/>,
        strategy: 'CRM',
    },
]