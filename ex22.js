const numeros = [1, 2, 3, 4, 5, 6];

var soma = 0;

console.log(numeros.filter(numero => numero %2 ==0).reduce((soma, numero) => soma += numero))

numeros.reduce(function(numero){
    soma += (numero % 2 == 0) ? numero : 0;
});

console.log(soma);