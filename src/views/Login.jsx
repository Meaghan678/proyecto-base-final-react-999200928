import { useContext, useState } from "react"
import { ChatContext } from "../context/ChatContext"
import { useNavigate } from "react-router-dom"

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)

    const { login } = useContext(ChatContext)
    
    const navigate = useNavigate()

    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        setError(null)
        
        const response = login({email, password})

        if(!response){
            setError(true)
            return
        }

        navigate("/")
    }

    return(
        <section>
            <h2>Bienvenido!! Inicie sesión</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Nombre" />
                <input type="text" placeholder="Apellido"/>
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