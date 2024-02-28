// reduce es un método que nos permite reducir un array a un solo valor.
// El método reduce nos permite reducir, mediante una función que se aplica a cada uno de los elemento del array, todos los elementos de un array, a un valor único.

// reduce recibe dos parámetros, el primero es una función que se encarga de reducir los elementos del array a un solo valor, el segundo es el VALOR INICIAL del acumulador.

const arr = [1, 2, 3, 4, 5];

const suma = arr.reduce((acumulador, valorActual) => {
  console.log('acumulador', acumulador);
  console.log('valorActual', valorActual);
  return acumulador + valorActual;
}, 3);

console.log('suma', suma);
