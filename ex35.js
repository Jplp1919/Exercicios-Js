

const nomes = ["João", "Sarah", "Solano", "Giovanna"];

nomes2 = nomes.filter(function(nome, index){
    return !nome.startsWith('J') ? nomes.splice(index, 0) : 0
})
console.log(nomes2)