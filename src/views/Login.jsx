import { useContext, useState } from "react"
import { ChatContext } from "../context/ChatContext"
import { useNavigate } from "react-router-dom"

const Login = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)

    const { login, handleUser } = useContext(ChatContext)
    
    const navigate = useNavigate()

    const handleChangeName = (e) => {
        setName(e.target.value)
    }

    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
 
        setError(null)

        const response = login({name,email, password})

        if(!response){
            setError(true)
            return
        }

        handleUser(name, email, password)
        navigate("/")
    }

    return(
        <section className="login">
            <h2>Bienvenido!! Inicie sesión</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Nombre y apellido" onChange={handleChangeName}/>
                <input type="email" placeholder="Email" onChange={handleChangeEmail}/>
                <input type="password" placeholder="Contraseña" onChange={handleChangePassword}/>
                <button>Ingresar</button>
            </form> 
            {
                error && <p className="error-login">Error al ingresar</p>
            }
        </section>
    )
}

export { Login }