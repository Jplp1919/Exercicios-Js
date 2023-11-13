function impar(numero){
    return numero % 2 === 1
}

const numeros = [2, 2, 0, 4, 4, 6];
var bool = numeros.some(impar);
if (bool){
    console.log("Existe pelo menos 1 numero impar neste array")
} else{
    console.log("Não esxistem números impares neste aray")
}
