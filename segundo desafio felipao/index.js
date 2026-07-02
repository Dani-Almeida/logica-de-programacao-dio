function calcularRank(qtdVitorias, qtdDerrotas){
    let saldoVitorias = qtdVitorias - qtdDerrotas;
    let nivelHeroi = "";

    if(saldoVitorias <= 10) {
        nivelHeroi = "Ferro";
    }
    else if(saldoVitorias <= 20) {
        nivelHeroi = "Bronze";    
    }
    else if(saldoVitorias <= 50) {
        nivelHeroi = "Prata";
    }
    else if(saldoVitorias <= 80) {
        nivelHeroi = "Ouro";
    }
    else if(saldoVitorias <= 90) {
        nivelHeroi = "Diamante";
    }
    else if(saldoVitorias <=100) {
        nivelHeroi = "Lendário";
    }
    else{
        nivelHeroi = "Imortal"
    }

    return (`O Herói tem saldo de: ${saldoVitorias} e está no nível de: ${nivelHeroi}`)
}

console.log(calcularRank(82, 1))