let nome = new String("Kaique Tsimitakis ")

console.log(nome.startsWith("Kaique"))//retorna true se for a primeira sentença, se n, false
console.log(nome.endsWith("Tsimitakis"))

console.log(nome.includes("aki"))//se tiver a sentença na variavel, true

console.log(nome.repeat(4))//quantas vezes quero repetir

//para alterar o valor da string, tem que adicionar diretamente
// nome = nome.repeat(4)
// console.log(nome)

console.log(nome.charCodeAt(0))
console.log(nome.charCodeAt(1))
console.log(nome.charCodeAt(2))
console.log(nome.charCodeAt(3))
console.log(nome.charCodeAt(4))
console.log(nome.charCodeAt(5)) //retornar meu nome em codigo

console.log(String.fromCodePoint(75, 97, 105, 113, 117, 101))//transforma o codigo que eu por em uma letra conforme a ordem

let nomeTS = "Kaique"

console.log(`Nome: ${nomeTS}`)