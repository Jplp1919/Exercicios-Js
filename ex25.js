function startsWithJ(nome){
    if(!nome.startsWith('J'))
    return nome;
    }
    const nomes = ["João", "Giovanna","Sarah"];
    const resultado = nomes.filter(startsWithJ);
    
    resultado.forEach((nome)=>
    console.log(nome)
    );
