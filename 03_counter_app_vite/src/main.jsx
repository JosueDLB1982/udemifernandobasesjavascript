import React from 'react';
import ReactDOM from 'react-dom/client';
/* import { HelloWorld } from './HelloWorld'; */
import { CounterApp } from './CounterApp';
import './styles.css'

/* import HelloWorldApp from './HelloWorld' */ /* Puesto que exporté la App por defecto no lleva {} la importación. De no ser así tendría que estar entre {} */


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CounterApp
            value = {0}
        />
    </React.StrictMode>
)