

var nomes1 = ["João", "Maria", "Giovanna"];

var nomes2 = ["Petter", "Souza", "Sachet"];

nomes1 = [...nomes1, ...nomes2]

nomes1.forEach((nome)=> {

    console.log(nome)

});