let nome = new String("Kaique Tsimitakis")
let nome2 = new String("Kaique Tsimitakis")
let nome3 = new String(nome.toLocaleUpperCase())
let sobrenome = new String(" Fonseca")

console.log(nome)
console.log(typeof(nome))

console.log(nome.charAt(0))//retorna o caractere na posição

console.log(nome.charCodeAt(0))//retorna o codigo do caractere na posição

console.log(nome.concat(sobrenome))//não altera a variavel

console.log(nome.indexOf("i"))//retorno de -1 significa que não existe, retorna a primeira posição do caractere indicado

console.log(nome.lastIndexOf("i"))//retorna a ultima posição do caractere indicado

console.log(nome.localeCompare(nome2))//0 significa que são iguais, -1 e 1 diferentes

console.log(nome.replace("K", "R"))//só substitui o primeiro

console.log(nome.search("Tsimitakis"))//retorna posição do que pedi

let sobrenome2 = nome.slice(7, 17)//recorta o que foi solicitado
console.log(sobrenome2)

let arrayNome = nome.split(" ")//separa na onde foi marcado
console.log(arrayNome)

let parte1 = nome.substring(0, 6)//primeira posição é o começo, a segunda o fim
console.log(parte1)

let parte2 = nome.substr(7, 10)//primeira posição é o começo, a segunda o tamamho
console.log(parte2)

console.log(nome.toUpperCase())
console.log(nome.toLowerCase())

//console.log(nome.toLocaleUpperCase())
//console.log(nome.toLocaleLowerCase())

console.log(nome3)

console.log(nome.valueOf())

let num1 = 10
console.log(typeof(num1.toString()))
// console.log(nome)
// nome = nome.concat(sobrenome)
// console.log(nome)