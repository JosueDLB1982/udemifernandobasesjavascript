console.log('Objetos Literales');

const person = {
    name: 'Josue',
    lastName: 'Lopez',
    age: 40,
    address: {
        region: 'VI Región',
        commune: 'Machalí',
        avenue: 'El Parronal',
        other: 'Conjunto Residencial la Cosecha Norte, casa 21',
    }
};
console.log(person);
console.log('')
console.table(person);
console.log('')
console.log({
    person/* : person */
});

const person2 = {...person};
console.log(person2.name = 'David');
console.log('');
console.log(person);
console.log('');
console.log(person2);