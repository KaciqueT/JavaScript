const nome = Symbol(nome)
const numero = Symbol(numero)
const idade = Symbol(idade)

const Jogador = {
    nome: "nj",
    [numero]: 10,
    [idade]: 32
}

// Jogador[numero] = 10

for(p in Jogador){
    console.log(p)
}

console.log(Jogador.nome)
console.log(Jogador[numero])
console.log(Jogador[idade])