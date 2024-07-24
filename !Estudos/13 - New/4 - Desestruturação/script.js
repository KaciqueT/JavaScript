let numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90]
let [a, b, c, ...d] = numeros

let obj = {nome: "Kaique", curso:"Javascript", idade:"21"}
let {nome, curso} = obj

// let numeros = () => {
//     return [10, 20, 30, 40]
// }
// let [a, b, c, d] = numeros()
 
// let a = 10;
// let b = 20;

// [a,b] = [b,a]

//[a, b=0, c=0, d=0 ] = [10]

// let numeros = [10, 20, 30, 40]
// let [a, b, c, d] = numeros 

//({a, b, c, d} = {a:"verde", b:"amarelo", c:"azul", d:"vermelho"}) //10, 20, 30, 40

console.log(nome)
console.log(curso)

console.log(a)
console.log(b)
console.log(c)
console.log(d)

const cores = () => {
    return ["verde", "amarelo", "azul", "vermelho"]
}
let [c1, c2, , c3] = cores()
console.log(c1)
console.log(c2)
console.log(c3)

let texto = "Curso de Javascript"
let [p1, p2, p3] = texto.split(" ")
console.log(p1)
console.log(p2)
console.log(p3)