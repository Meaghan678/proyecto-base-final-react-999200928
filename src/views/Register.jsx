import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { ChatContext } from "../context/ChatContext"

const Register = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorName, setErrorName] = useState(null)
    const [errorEmail, setErrorEmail] = useState(null)
    const [errorPassword, setErrorPassword] = useState(null)

    const { register, handleUser } = useContext(ChatContext)

    const navigate = useNavigate()

    const handleChangeNameReg = (e) => {
        setName(e.target.value)
    }

    const handleChangeEmailReg = (e) => {
        setEmail(e.target.value)
    }

    const handleChangePasswordReg = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmitReg = (e) => {
        e.preventDefault()

        //Validacion Nombre 
        if(name.length === 0){
            setErrorName("Campo obligatorio")
            return
        }
        if(name.length < 3){
            setErrorName("Mínimo 3 caracteres")
            return
        }

        //Validacion Email 
        if(email.length === 0){
            setErrorEmail("Campo obligatorio")
            return
        }
        if(!email.includes('@gmail.com') && !email.includes('@hotmail.com') && !email.includes('@frba.utn.edu.ar')){
            setErrorEmail("Formato inválido")
            return
        }

        //Validacion contraseña
        if(password.length === 0){
            setErrorPassword("Campo obligatorio")
            return
        }
        if(password.length < 6){
            setErrorPassword("Mínimo 6 caracteres")
            return
        }

        handleUser(name, email, password)
        navigate("/")
    }

    return (
        <section className="register">
            <h2>Registrate</h2>
            <form noValidate onSubmit={handleSubmitReg}>
                <input type="text" placeholder="Nombre y apellido" required onChange={handleChangeNameReg}/>
                <div className="error-container">
                    { errorName && <p className="error-name">{errorName}</p>}
                </div>
                <input type="email" placeholder="Email" onChange={handleChangeEmailReg}/>
                <div className="error-container">
                    { errorEmail && <p className="error-email">{errorEmail}</p>}
                </div>
                <input type="password" placeholder="Contraseña" onChange={handleChangePasswordReg}/>
                <div className="error-container">
                    { errorPassword && <p className="error-pass">{errorPassword}</p>}
                </div>
                <button>Enviar</button>
            </form>
            <p className="link-login">¿Ya tienes cuenta? <Link to="/login">Inicie sesión</Link></p>
        </section>
    )    
}

export { Register }