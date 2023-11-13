function dobro (numero){
    return numero*2;
}

const numeros = [1, 2, 3, 4, 5, 6];
const novosNumeros = numeros.map(dobro);

novosNumeros.forEach((numero)=>
console.log(numero)

);