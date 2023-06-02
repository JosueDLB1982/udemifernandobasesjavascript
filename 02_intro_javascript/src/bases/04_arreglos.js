console.log('Arreglos');

/*
const arr = [];
arr.push(1);
arr.push(2);
arr.push(3);
arr.push(4);
console.log(arr);

No se recomineda usar .push() porque muta el arreglo original. En su lugar usamos ... spread operator
*/

let arr = [1, 2, 3, 4];
let arr2 = [...arr, 5];
console.log('');
console.log(arr2);

const arr3 = arr2.map(e => e * 2);
console.log('');
console.log(arr3);
console.log('');
console.log(arr);