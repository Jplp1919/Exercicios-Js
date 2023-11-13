const numeros = [1, 2, 3, 4, 5, 6];
var media = 0;
var conta = 0;

numeros.forEach((numero)=> {
    media += numero
    conta++
}

);

media = media/conta;

console.log("A média é " + media)