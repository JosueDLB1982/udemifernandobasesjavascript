import React from 'react';
import ReactDOM from 'react-dom/client';
/* import { HelloWorld } from './HelloWorld'; */
import { FirstApp } from './FirstApp';
import './styles.css'
/* import HelloWorldApp from './HelloWorld' */ /* Puesto que exporté la App por defecto no lleva {} la importación. De no ser así tendría que estar entre {} */


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <HelloWorld /> debe ser el mismo nombre que use en el import. Lo que yo quiera */}
        <FirstApp
            title = 'Valores por defecto de PROPS'
            /* subTitle =  'Pruebas' */
        /> 
    </React.StrictMode>
)