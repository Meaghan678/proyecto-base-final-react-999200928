import { useState } from "react"
import { users } from "../services/mockApi"

const Aside = () => {
    const [search, setSearch] = useState("")

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    const filteredUsers = users.filter((user) => user.name.toLowerCase().includes(search.toLowerCase()))

    return(
        <aside>
            <h1>Chat UTN</h1>
            <input type="search" placeholder="Buscar un chat" onChange={handleChange}/>
            {
                filteredUsers.length === 0 && <p>No se encontraron resultados.</p>
            }
            <ul>
                {
                    filteredUsers.map((user) => {
                        <li>
                            {user.name}
                            <small>{user.message}</small>
                        </li>
                    })
                }
            </ul>
        </aside>
    )
}

export {Aside}