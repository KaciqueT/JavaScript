class Jogador{
    constructor(nome){
        this.nome = nome
        this.id = Symbol()
    }
}

let jogadores = [new Jogador("J1"), new Jogador("J2"), new Jogador("J3"), new Jogador("J4"), new Jogador("J1"), new Jogador("J2")]

let s = []

let simbJog = jogadores.filter((j) => {
     return j.nome == "J1"
})

s = simbJog.map((j) => {
    return j.id
})

// let s1 = jogadores[0].id

// jogadores = jogadores.filter((j) => {
//     return j.id != s1
// })

// jogadores = jogadores.filter((j) => {
//     return j.nome != "J1"
// })

// console.log(jogadores)
// console.log(simbJog)
// console.log(s)
