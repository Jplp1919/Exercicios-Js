var palavra = "Esta é uma palavra que vai ser dividida"
const array = palavra.split(/(?!$)/u);

console.log(array)