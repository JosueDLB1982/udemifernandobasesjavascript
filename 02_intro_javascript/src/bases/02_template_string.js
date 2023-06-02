console.log('template string')

const name = 'Josue';
const lastName = 'Lopez';
const fullName = `${name} ${lastName}`
console.log(fullName)

const getGreeting = () => {
    return `hola ${name}`
}

console.log(`Este es un texto de ejemplo ${getGreeting(name)}`)