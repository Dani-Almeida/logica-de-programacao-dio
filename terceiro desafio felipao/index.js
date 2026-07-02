class herois{
    constructor (){
        this.listaHerois = [
            {nome: "Mestre", idade: 60, tipo: "mago"},
            {nome: "Aquiles", idade: 45, tipo: "guerreiro"},
            {nome: "Chakan", idade: 55, tipo: "monge"},
            {nome: "Genji", idade: 40, tipo: "ninja"}
        ]
    }

    atacar(){
        for(let i = 0; i< this.listaHerois.length; i++){
            let ataque = "";

            if (this.listaHerois[i].tipo === "mago"){
                ataque = "magia";
            }
            else if (this.listaHerois[i].tipo === "guerreiro"){
                ataque = "espada";
            }
            else if (this.listaHerois[i].tipo === "monge"){
                ataque = "artes marciais";
            } 
            else if (this.listaHerois[i].tipo === "ninja"){
                ataque = "shuriken";
            }   

            console.log(`O ${this.listaHerois[i].tipo} atacou usando ${ataque}.`)
        }
    }
}

let listaHerois = new herois()
listaHerois.atacar()