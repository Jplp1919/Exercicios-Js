const numeros = [1, 2, 3, 4, 5, 6];
var conta = 0;

numeros.forEach((numero)=> {
    if(numero % 2 === 1){
        conta++
    }
}

);

console.log("O array tem " + conta + " numeros impares")