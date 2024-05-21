const objs1 = document.getElementsByTagName("div")
const objs2 = [...document.getElementsByTagName("div")]

objs2.forEach(element => {
    console.log(element)
});//retorna elementos pegos no html


/*const soma = (v1, v2, v3) =>{
    return v1+v2+v3
}

let valores = [1, 5, 4]

console.log(soma(...valores))*/


/*const jogador1 = {nome: "Kaique", energia: 100, vidas: 3, magia: 150}
const jogador2 = {nome: "Kaziques", energia: 100, vidas: 5, velocidade: 80}
const jogador3 = {...jogador1, ...jogador2}

console.log(jogador3)*/


/*let n1 = [10, 20, 30]
let n2 = [11, 22, 33, 44, 55]
let n3 = [...n1,...n2]
let n3 = [...n1]

console.log("n1: " + n1)
console.log("n2: " + n2)
console.log("n3: " + n3)
console.log("tipo de n3: " + typeof(n3))*/