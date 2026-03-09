import { useContext, useState } from "react"
import { ChatContext } from "../context/ChatContext"
import { Link, useNavigate } from "react-router-dom"

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
                <h2>Bienvenido a Chat UTN 👋🏻</h2>
                <p>Comienza a chatear con tus amigos de manera gratuita y segura.</p>
                <p>Nuestra plataforma te permite mantenerte conectado en tiempo real, garantizando que tus conversaciones sean privadas y fluidas desde cualquier dispositivo.</p>
                <p className="about-us">Para saber mas sobre nosotros entre aqui: </p>
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
                <p className="link-reg">¿No tienes cuenta? <Link to="/register">Regístrate</Link></p>
            </div>
        </section>
    )
}

export { Login }