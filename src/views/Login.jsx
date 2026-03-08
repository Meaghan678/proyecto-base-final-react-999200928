import { useContext, useState } from "react"
import { ChatContext } from "../context/ChatContext"
import { useNavigate } from "react-router-dom"

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)

    const { login, handleUser } = useContext(ChatContext)
    
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

        handleUser(email, password)
        navigate("/")
    }

    return(
        <section className="container">
            <div className="welcome">
                <h2>Bienvenido a Chat UTN</h2>
                <p>Comienza a chatear con tus amigos de manera gratuita y segura.</p>
                <p>Para saber mas sobre nosotros entre aqui: </p>
                <a href="">acerca</a>
            </div>
            <div className="login">
                <h2>Iniciar sesión</h2>
                <form onSubmit={handleSubmit}>
                    <input type="email" placeholder="Email" onChange={handleChangeEmail}/>
                    <input type="password" placeholder="Contraseña" onChange={handleChangePassword}/>
                    <button>Ingresar</button>
                </form> 
                {
                    error && <p className="error-login">Error al iniciar sesión</p>
                }
            </div>
        </section>
    )
}

export { Login }