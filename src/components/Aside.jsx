import { useContext, useEffect, useState } from "react"
import { ChatContext } from "../context/ChatContext"
import { useNavigate } from "react-router-dom"

const Aside = () => {
    const [search, setSearch] = useState("")

    const { users, handleSelectedUser, logOut } = useContext(ChatContext)

    const navigate = useNavigate()

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    const filteredUsers = users.filter((user) => user.name.toLowerCase().includes(search.toLowerCase()))

    const handleClick = (id) => {
        handleSelectedUser(id)
    } 

    const handleLogOut = () => {
        logOut()
        navigate("/login")
    }

    return(
        <aside>
            <div className="header-aside">
                <h1>Chat UTN</h1>
                <button className="log-out" onClick={handleLogOut}>
                <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 24 24"><path fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.393 4C4 4.617 4 5.413 4 7.004v9.994c0 1.591 0 2.387.393 3.002q.105.165.235.312c.483.546 1.249.765 2.78 1.202c1.533.438 2.3.657 2.856.329a1.5 1.5 0 0 0 .267-.202C11 21.196 11 20.4 11 18.803V5.197c0-1.596 0-2.393-.469-2.837a1.5 1.5 0 0 0-.267-.202c-.555-.328-1.323-.11-2.857.329c-1.53.437-2.296.656-2.78 1.202a2.5 2.5 0 0 0-.234.312M11 4h2.017c1.902 0 2.853 0 3.443.586c.33.326.476.764.54 1.414m-6 14h2.017c1.902 0 2.853 0 3.443-.586c.33-.326.476-.764.54-1.414m4-6h-7m5.5-2.5S22 11.34 22 12s-2.5 2.5-2.5 2.5"/></svg>
            </button>
            </div>
            <div className="search-bar">
                <svg className="icon"  xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 32 32"><path fill="none" stroke="#cccccc" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 27l7.5-7.5M28 13a9 9 0 1 1-18 0a9 9 0 0 1 18 0"/></svg>
                <input type="search" placeholder="Buscar un chat" onChange={handleChange}/>
            </div>
            {
                filteredUsers.length === 0 && <p className="not-found-chat">No se encontraron resultados.</p>
            }
            <ul>
                {
                    filteredUsers.map((user) => {
                        const lastMessage = user.messages[user.messages.length - 1];

                        return(
                        <li key={user.id} onClick={() => handleClick(user.id)}>
                            <img src={user.avatar_url}alt="" />
                            <div className="user-last-message">
                                {user.name}
                                <small>{lastMessage.text}</small>
                            </div>
                        </li>
                        )
                    })
                }
            </ul>
        </aside>
    )
}

export {Aside}