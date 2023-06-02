console.log('Desestructuración de Objetos');
console.log('Asignación desestructurante');
console.log('');

// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

const person = {
    name: 'Josue',
    age: 40,
    key: 'kioyuro',
    rank: 'Capitan',
};

/* console.log(person.name);
console.log(person.age);
console.log(person.key);
 */

/* const {age, name, key} = person; */

/* console.log(name);
console.log(key);
console.log(age); */

const UseContext = ({age, key}) => { //Al colocarlo entre {} extraigo la propiedad desestructurando. Se pueden agragar valores por defecto
    return {
        nameKey: key,
        annios: age,
        latLon: {
            lat: 1.1773,
            lng: -1.3455,
        }
    }
};
const {nameKey, annios, latLon: {lat, lng}} = UseContext(person);
console.log(nameKey, annios);
console.log(lat, lng);