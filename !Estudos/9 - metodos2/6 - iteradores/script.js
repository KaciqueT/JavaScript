//Arrays
//Strings
//Map
//Sets

const valores = [10, 8, 9, 2, 15, 4, 7, 0]
const iterator = valores[Symbol.iterator]()

const txt = "Youtube"
const itetxt = txt[Symbol.iterator]()

console.log(txt)
console.log(itetxt.next())
console.log(itetxt.next())
console.log(itetxt.next())
console.log(itetxt.next())
console.log(itetxt.next())
console.log(itetxt.next())
console.log(itetxt.next())

// console.log(valores)
// console.log(iterator.next().value)
// console.log(iterator.next().value)