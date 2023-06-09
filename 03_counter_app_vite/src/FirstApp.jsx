import PropTypes from 'prop-types'

/* const newMessage = 'Mensaje inyectado en el HTML'
const objMessage = {
    message: 'Hola mundo',
    title: 'Inyeccion de objeto en el HTML',
}

const greeting = (name) => {
    return (
        `Saludos a todos, mi nombre es ${name}`
    )
} */

export const FirstApp = ({title, subTitle}) => {
    /* console.log(props) */
    return (
        <> {/* Fragmento de React */}
            {/* <div>Ejercicio de creación de componente</div>
            <p>Prueba de fragmento</p> */}
            {/* <p>{newMessage}</p> Se usan {} para inyectar contenido */}
            {/* <p>{objMessage.message}</p>
            <p>{objMessage.title}</p> */}
            {/* <code>{JSON.stringify(objMessage)}</code> */}
            {/* <h1>{greeting('Josue López')}</h1> */}
            <h1>{title}</h1>
            <h2>{subTitle}</h2>
        </> 
    )
}

FirstApp.propTypes = {
    subTitle: PropTypes.string,
    title: PropTypes.string/* .isRequired */,
}

FirstApp.defaultProps = {
    otroPropDePrueba: 'Este es un prop por defecto creado acá como ejemplo. Ver en React DEV Tools',
    subTitle: 'subtítulo por defecto',
    title: 'Este es un título por defecto',
}

    

  

