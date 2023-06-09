const newMessage = 'Mensaje inyectado en el HTML'
const objMessage = {
    message: 'Hola mundo',
    title: 'Inyeccion de objeto en el HTML',
}

const greeting = (name) => {
    return (
        `Saludos a todos, mi nombre es ${name}`
    )
}

export const FirstApp = () => {

    return (
        <> {/* Fragmento de React */}
            <div>Ejercicio de creación de componente</div>
            <p>Prueba de fragmento</p>
            <p>{newMessage}</p> {/* Se usan {} para inyectar contenido */}
            <p>{objMessage.message}</p>
            <p>{objMessage.title}</p>
            <code>{JSON.stringify(objMessage)}</code>
            <h1>{greeting('Josue López')}</h1>
        </> 
    )
} 

    

  

