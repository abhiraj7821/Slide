import { Button } from "@/components/ui/button"
import { Bell } from "lucide-react"


 

function Infobar( ) {
  return (
    <Button className="bg-white rounded-full py-1 hover:bg-blue-200">
        <Bell color="#3353CC" fill="#3353CC"/>
    </Button>
  )
}

export default Infobar