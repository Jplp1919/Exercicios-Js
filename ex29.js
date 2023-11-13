function indexFinder(nome){
    return nome.startsWith('S');
    

};
var index = 0;
const nomes = ["João", "Sarah", "Solano"];

index = nomes.findIndex(indexFinder);

console.log(index);
