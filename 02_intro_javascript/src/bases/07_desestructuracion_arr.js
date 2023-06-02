console.log('Desestructuración de arreglos');
console.log('Asignación desestructurante en arreglos');
console.log('');

const characters = ['Josue', 'Caleb', 'Enoc'];
console.log(characters);
console.log(characters[0]);
console.log(characters[1]);
console.log(characters[2]);

const [, , cha3] = characters;
console.log(cha3)

const returnArr = () => {
    return ['ABC', 123]
};
const [letter, nums] = returnArr();
console.log(letter, nums);

const UseState = (value) => {
    return [value, () => console.log('Hola mundo')];
};
const [name, setName] = UseState('Pedro');
console.log(name);
setName();