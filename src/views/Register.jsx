import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Register = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorName, setErrorName] = useState(null)
    const [errorEmail, setErrorEmail] = useState(null)
    const [errorPassword, setErrorPassword] = useState(null)

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
        if(!email.includes('@')){
            setErrorEmail("Formato inválido")
        }

        //Validacion contraseña
        if(password.length === 0){
            setErrorPassword("Campo obligatorio")
        }
        if(password.length < 6){
            setErrorPassword("Mínimo 6 caracteres")
        }

        navigate("/")
    }

    return (
        <section className="register">
            <h2>Registrate</h2>
            <form noValidate onSubmit={handleSubmitReg}>
                <input type="text" placeholder="Nombre y apellido" required onChange={handleChangeNameReg}/>
                { errorName && <p className="error-name">{errorName}</p>}
                <input type="email" placeholder="Email" onChange={handleChangeEmailReg}/>
                { errorEmail && <p className="error-email">{errorEmail}</p>}
                <input type="password" placeholder="Contraseña" onChange={handleChangePasswordReg}/>
                { errorPassword && <p className="error-pass">{errorPassword}</p>}
                <button>Enviar</button>
            </form>
        </section>
    )    
}

export { Register }