import { useState } from "react"

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
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
        </section>
    )
}

export { Login }