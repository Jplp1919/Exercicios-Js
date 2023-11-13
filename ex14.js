function maiorQueZero(numero){
    return numero > 0
}
const numeros = [1, 1, 2, 4, 5, 6];

var bool  = numeros.every(maiorQueZero);

if (bool){
console.log("Todos os números são maiores que 0")
} else{
    console.log("Todos os números não são maiores que 0")
}