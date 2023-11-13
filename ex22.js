const numeros = [1, 2, 3, 4, 5, 6];

var soma = 0;

numeros.reduce(function(numero){
    soma += (numero % 2 == 0) ? numero : 0;
});

console.log(soma);