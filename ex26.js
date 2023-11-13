function negative(numero){
    numero = numero < 0 ? 0 : numero;

};
const numeros = [1, -2, -3, 4, 5, 6];

const notNegative = numeros.map(negative);

console.log(notNegative);