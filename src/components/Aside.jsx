import { useEffect, useState } from "react"

const Aside = ({ onActiveUser }) => {
    const [search, setSearch] = useState("")
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetchingData()
    }, [])

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    const filteredUsers = users.filter((user) => user.name.toLowerCase().includes(search.toLowerCase()))

    const handleClick = (id) => {
        onActiveUser(id)
    } 

    return(
        <aside>
            <h1>Chat UTN</h1>
            <div className="search-bar">
                <svg className="icon" class="icon"  xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 32 32"><path fill="none" stroke="#cccccc" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 27l7.5-7.5M28 13a9 9 0 1 1-18 0a9 9 0 0 1 18 0"/></svg>
                <input type="search" placeholder="Buscar un chat" onChange={handleChange}/>
            </div>
            {
                filteredUsers.length === 0 && <p>No se encontraron resultados.</p>
            }
            <ul>
                {
                    filteredUsers.map((user) => {
                        return(
                        <li key={user.id} onClick={ () => handleClick(user.id)}>
                            <img src={user.avatar_url}alt="" />
                            <div>
                                {user.name}
                                <small>{user.message}</small>
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