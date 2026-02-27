const Login = () => {
    return(
        <section>
            <h2>Bienvenido!! Inicie sesión</h2>
            <form >
                <input type="text" placeholder="Ingrese su nombre" />
                <input type="text" placeholder="Ingrese su apellido"/>
                <input type="email" placeholder="Ingrese su email"/>
                <input type="password" placeholder="Ingrese su contraseña"/>
                <button>Ingresar</button>
            </form>
        </section>
    )
}

export { Login }