import heroes, {owners} from '../datos/heroes'

//console.log('Import, Export y funciones comunes de arreglos');
//console.log('');

//console.log(heroes);
 
//console.log('');

export const getHeroeById = (id) => heroes.find(heroe => heroe.id === id);

//console.log(getHeroeById(4));

export const getHeroeByOwner = (owner) => heroes.filter(hero => hero.owner === owner)
//console.log(getHeroeByOwner('DC'))

//console.log(owners);


