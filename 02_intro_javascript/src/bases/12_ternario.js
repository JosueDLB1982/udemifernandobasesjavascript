console.log('Operador condicional Ternario');
console.log('');

const active = true;

/* let message = ''; con if else

if(active) {
    message = 'Usuario activo'
} else {
    message = 'Usuario inactivo'
}
console.log(message) */

// con ternario

/* const message = active ? 'Usuario activo' : 'Usuario inactivo';
console.log(message) */

// ternario corto

const message = active && 'Usuario activo' // si la condición no se cumple devuelve falso
console.log(message)

