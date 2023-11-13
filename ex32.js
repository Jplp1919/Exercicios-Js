const nomes = ["João", "Sarah", "Solano", "Giovanna", 3];

console.log(nomes.every(function(nome){
return typeof nome == 'string'
}));