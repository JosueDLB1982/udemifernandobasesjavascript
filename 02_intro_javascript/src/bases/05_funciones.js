console.log('Funciones');
console.log('');

const greet = (name) => `Hola ${name}`;

console.log(greet('Josue'));

console.log('');

const getUser = () => ({
    uId: 'ABC123',
    userName: 'Josue',
});

console.log(getUser());

console.log('');

const getActiveUser = (name) => ({
    uId: 'ABC456',
    userName: 'David',
});
const activeUser = getActiveUser('David');
console.log(activeUser);
