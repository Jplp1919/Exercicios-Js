

const numeros = [1, 2, 3, 4, 5, 6];

var maior = 0;

numeros.reduce(function(anterior, atual, index, array){
    maior = anterior > atual ? anterior : atual;
});

console.log("O maior número é " + maior)