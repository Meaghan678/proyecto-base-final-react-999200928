import { useState, useRef, useEffect } from "react"

const Chat = ({activeUser}) => {
    const [text, sendText] = useState("")
    const [messages, setMessage] = useState([])

    const chatBodyRef = useRef(null)

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
            id: messages.length +1,
            author: "me",
            time: hour.getHours() + ":" + hour.getMinutes(),
            text: text
        }

        setMessage([...messages, newMessage])
        setText("")
    }

    useEffect(() => {
        if(chatBodyRef.current){
            chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight
        }
    },[messages])

    if(!activeUser){
        return(
            <section className="chat-cont-empty">
                <p className="chat-empty">Selecciona un contacto para empezar a conversar</p>
            </section>
        )
    }

    return(
        <section className="chat">
            <header>
                <h2>{activeUser.name}</h2>
                <p>Última conexión: {activeUser.last_seen}</p>
            </header>
            <div className="chat-body" ref={chatBodyRef}>
                {
                    messages.map((message) => <div key={message.id}className={`message ${message.name === "name" ? "me" : "received"}`}>
                        {message.name}: {message.message}
                        <p className="timestamp">{message.time}</p>
                    </div>)
                }
            </div>

            <div className="send-message">
                <textarea type="text" placeholder="Escribe un mensaje" onChange={handleChangeText} onKeyDown={handleKeyDown} value={text}/>
                <button onClick={sendMessage} className="send">
                    <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14L21 3m0 0l-6.5 18a.55.55 0 0 1-1 0L10 14l-7-3.5a.55.55 0 0 1 0-1z"/></svg>
                </button>
            </div>

        </section>
    )
}

export {Chat}