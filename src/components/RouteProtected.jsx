import { useContext } from "react"
import { ChatContext } from "../context/ChatContext"

const RouteProtected = ({ children }) => {
    const { loggedUser } = useContext(ChatContext)

    if(!loggedUser){
        return <Navigate to="/" replace/>
    }

    return(
        children
    )
}

export{ RouteProtected }