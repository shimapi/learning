// slice es un método que nos permite extraer secciones de un array.
// El método slice devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido). La array original no se modificará.


const arr = [1, 2, 3, 4, 5];

const newArr = arr.slice(1, 5);
console.log(newArr);


const newArr2 = arr.slice(0, 4);
console.log(newArr2)