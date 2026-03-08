import { useState } from "react"

const Register = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleChangeNameReg = (e) => {
        setName(e.target.value)
    }

    const handleChangeEmailReg = (e) => {
        setEmail(e.target.value)
    }

    const handleChangePasswordReg = (e) => {
        setPassword(e.target.value)
    }

    return (
        <section className="register">
            <h2>Registrate</h2>
            <form>
                <input type="text" placeholder="Nombre y apellido" onChange={handleChangeNameReg}/>
                <input type="email" placeholder="Email" onChange={handleChangeEmailReg}/>
                <input type="password" placeholder="Contraseña" onChange={handleChangePasswordReg}/>
                <button>Enviar</button>
            </form>
        </section>
    )    
}

export { Register }