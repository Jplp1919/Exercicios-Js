soma = 0;
function maiorQueCinco(numero){
    numero > 5 ? numero : 0
}

const numeros = [1, 2, 3, 4, 5, 6, 12, 40];
var soma = numeros.reduce(maiorQueCinco)
console.log(soma);