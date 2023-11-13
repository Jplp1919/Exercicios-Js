

const numeros = [1, 21, 3, 4, 5, 6];

maior = 0;

maior = numeros.reduce(function(anterior, atual){ return anterior > atual ? anterior : atual;});

console.log("O maior número é " + maior)