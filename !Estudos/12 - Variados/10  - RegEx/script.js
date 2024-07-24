let nome = new String ("Kaique Tsimitakis 2002")
let nome2 = new String ("Kaiiiiique")
let numero = "1, 10, 100, 1000"
let email = "kaique@kaique.kaique"

console.log(nome)

console.log(nome.search(/tsi/i)) // /serve para fazer o regexp, e o i é para n pegar o case sensitive/

console.log(nome.match(/i/g)) // acha todas os elementos na variavel, e o g é pesquisa global

console.log(nome.replace(/a/ig,"Pablo")) // substitui o elemento

console.log(nome.match(/[ia]/ig)) //pesquisa tanto os i quanto os a

console.log(nome.match(/[a-r|t-z|0-9]/ig)) //retorna as letras de a até s,, de t até z, e de 0 até 9

//metacaracteres
console.log(nome.match(/\d/ig))//só retorna numericos
console.log(nome.match(/\s/ig))//só retorna espaços
console.log(nome.match(/\bT/ig))//só retorna caracteres especificos

//quantificadores
console.log(nome2.match(/i+/ig))//+ junta se as letras estiverem juntas
console.log(numero.match(/10/ig))
console.log(numero.match(/10+/ig))
console.log(numero.match(/10*/ig))//retorna tudo que tem oq foi pesquisado de forma inteiro
console.log(numero.match(/10?/ig))//retorna tudo que tem oq foi pesquisado de forma exata