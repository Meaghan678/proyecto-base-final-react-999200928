const Acerca = () => {
    return(
        <section>
            <h1>Proyecto Final React</h1>
            <h4>¿De que trata?</h4>
            <p>Este proyecto consiste en el desarrollo de una aplicación web de chats que busca emular la experiencia de usuario de WhatsApp. La aplicación incluye un sistema de Login, donde los usuarios previamente registrados pueden acceder a sus conversaciones, y una sección de Registro, que permite a nuevos usuarios crear una cuenta para comenzar a utilizar el chat.</p>
            <img src="/src/assets/chat.jpg" alt="imagen aplicacion chat" />

            <h4>Partes principales</h4>
            <p><strong>Aside: </strong>Contiene la lista de todos los usuarios disponibles en la aplicación. Incluye una barra de búsqueda para filtrar usuarios y un botón que permite cerrar la sesión del usuario actual.</p>
            <p><strong>Chat: </strong>Es el panel principal de conversación donde se muestran todos los mensajes.</p>
            <p><strong>Login: </strong>Incluye una pantalla de bienvenida junto con un formulario que permite a los usuarios registrados iniciar sesión. En caso de no tener una cuenta, se ofrece un enlace que redirige directamente a la sección de registro.</p>
            <p><strong>Register: </strong>Permite a los nuevos usuarios crear una cuenta ingresando sus datos para poder acceder posteriormente a la aplicación de chats.</p>

            <h4>Tecnologías utilizadas</h4>
            <ul>
                <li>React 
                    <ul>
                        <li>JSX</li>
                        <li>Componentes funcionales</li>
                        <li>Paginas</li>
                        <li>Context</li>
                        <li>Router</li>
                    </ul>
                </li>
                <li>CSS</li>
                <li>MockApi</li>
            </ul>

            <h4>Decisiones de desarrollo</h4>
            <ol>
                <li><p>Se agregaron links hacia las rutas Login, Register y Acerca, con el objetivo de facilitar la navegación dentro de la aplicación y brindar una interfaz más cómoda e intuitiva para el usuario.</p></li>
                <li><p>Para las validaciones del formulario Register se utilizaron condicionales para cada campo del formulario. De esta manera, según la condición que no se cumpla, se muestra al usuario el mensaje de error correspondiente.</p></li>
                <li>Para la funcionalidad de Register se implementó una validación que verifica si ya existe un usuario registrado con el mismo email. Para ello se busca el email ingresado dentro de la lista de usuarios simulada. Si el usuario no existe, se permite continuar con el registro. En caso de que el email ya esté registrado, el sistema impide la creación de la cuenta para evitar usuarios duplicados.</li>
            </ol>

            <h4>Observaciones personales</h4>
            <p>Personalmente, me pareció un proyecto interesante y muy completo. Presentó cierta complejidad, sobre todo en la implementación del contexto, ya que definir la lógica y aplicarla correctamente a veces resultaba dificil. Sin embargo, me ayudó a aprender más sobre React y a profundizar en todos los aspectos del proyecto.</p>
        </section>
    )
}

export { Acerca }