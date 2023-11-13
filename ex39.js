const nomes1 = ["João", "Sarah", "Solano", "Giovanna"];
const nomes2 = ["João", "Solano"];

var nomes3 = nomes1.concat(nomes2);
 
nomes3 = nomes3.filter(nome => {return (nomes1.includes(nome) && nomes2.includes(nome) )});

var unique=[]

nomes3.forEach(nome => {
    if(!unique.includes(nome)){
        unique.push(nome);
    }
return unique;
});

console.log(unique);