const nomes = ["João", "Giovanna","Sarah", "Sarah", "Giovanna"]

const nomesUnicos = nomes.filter((nome, index)=>{
    return nomes.indexOf(nome) === index;
});

console.log(nomesUnicos)