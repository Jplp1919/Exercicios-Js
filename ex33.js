const numeros = [4, 1, 6, 2, 8, 23];

const resultado =  numeros.reduce((a, b) => Math.min(a, b));

console.log(resultado)