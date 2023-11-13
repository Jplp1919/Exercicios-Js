function menorDez(numero){
return numero > 10
}
const numeros = [1, 2, 3, 40, 15, 26];

const resultado = numeros.filter(menorDez);

resultado.forEach((numero)=>
console.log(numero)
);