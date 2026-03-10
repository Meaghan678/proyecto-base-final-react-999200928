import { useState, useRef, useEffect, useContext } from "react"
import { ChatContext } from "../context/ChatContext"

const Chat = () => {
    const [text, setText] = useState("")
    const [wallpaper, setWallpaper] = useState("")
    const chatBodyRef = useRef(null)

    const{ selectedUser, handleMessages } = useContext(ChatContext)

    const handleChangeText = (e) => {
      setText(e.target.value)  
    }

    const handleKeyDown = (e) => {
        if(e.key === "Enter"){
            sendMessage()
        }
    }

    const sendMessage = () => {
        if(text.length === 0){
            return
        }

        const hour = new Date()

        const newMessage = {
            author: "me",
            time: hour.getHours() + ":" + hour.getMinutes(),
            text: text
        }

        handleMessages(newMessage)

        setText("")
    }

    useEffect(() => {
        if(chatBodyRef.current){
            chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight
        }
    },[selectedUser])

    if(!selectedUser){
        return(
            <section className="chat-cont-empty">
                <p className="chat-empty">Selecciona un contacto para empezar a conversar</p>
            </section>
        )
    }

    return(
        <section className="chat">
            <header>
                <div className="profile">
                    <img src={selectedUser. avatar_url} alt="" />         
                </div>
                <div>
                    <h2>{selectedUser.name}</h2>
                    <p className="last-conection">Últ. vez hoy a las {selectedUser.last_seen}</p>
                </div>
                <button className="picture">
                    <svg xmlns="http://www.w3.org/2000/svg" width="160" height="128" viewBox="0 0 20 16"><path fill="#ffffff" d="M2 13V9a1 1 0 1 1-2 0V7a1 1 0 1 1 2 0V3a1 1 0 1 1-2 0a3 3 0 0 1 3-3a1 1 0 1 1 0 2h4a1 1 0 1 1 0-2h3a1 1 0 0 1 0 2h4a1 1 0 0 1 0-2h3a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3a1 1 0 0 1 2 0m16-4.497V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3.504l4.39-7.322a3 3 0 0 1 4.69-.582zm0 2.823l-3.828-3.814a1 1 0 0 0-1.563.195L8.836 14H17a1 1 0 0 0 1-1zM6 9a3 3 0 1 1 0-6a3 3 0 0 1 0 6m0-2a1 1 0 1 0 0-2a1 1 0 0 0 0 2"/></svg>
                </button>
            </header>
            <div className="chat-body" ref={chatBodyRef}>
                {
                    selectedUser.messages.map((message) => <div key={message.id}className={`message ${message.author === "me" ? "me" : "received"}`}>
                        <p><b>{message.author}</b>: {message.text}</p>
                        <p className="timestamp">{message.time}</p>
                    </div>)
                }
            </div>

            <div className="send-message">
                <textarea className="input-send" type="text" placeholder="Escribe un mensaje" onChange={handleChangeText} onKeyDown={handleKeyDown} value={text}/>
                <button onClick={sendMessage} className="send">
                    <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14L21 3m0 0l-6.5 18a.55.55 0 0 1-1 0L10 14l-7-3.5a.55.55 0 0 1 0-1z"/></svg>
                </button>
            </div>

        </section>
    )
}

export {Chat}