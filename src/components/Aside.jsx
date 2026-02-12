import { useEffect, useState } from "react"

const Aside = () => {
    const [search, setSearch] = useState("")
    const [users, setUsers] = useState([])

    const fetchingData = async () => {
        try {
            const response = await fetch("https://devsapihub.com/api-users")

            if(!response.ok){
                console.log("No se pudo acceder a la api")
                return
            }

            const data = await response.json()

            setUsers(data)

        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        fetchingData()
    }, [])

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
                        return(
                        <li key={user.id}>
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