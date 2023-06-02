
import { getHeroeById } from './bases/08_imp_exp';
/* import heroes from './datos/heroes' */

/* const promise = new Promise( (resolve, reject) => {
    setTimeout(() => {
        const res = getHeroeById(2);
        resolve(res);
        
    }, 3000);
});

promise.then((hero) => {
    console.log('Heroe', hero)
});
promise.catch(err => console.warm(err)) */

const getHeroeByIdAsync = (id) => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {

            const res = getHeroeById(id);
            res ? resolve(res) : reject(`No existe un Heroe que tenga asociado el Id ${id}`);
            
        }, 3000);
    });
}

getHeroeByIdAsync(1)
    .then(/* hero => */ console.log/* ('Heroe', hero) */)
    .catch(/* err => */ console.warn/* (err) */)