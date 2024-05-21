const caixa1 = document.querySelector("#caixa1")
const btn = [...document.querySelectorAll(".curso")]

console.log(caixa1.firstElementChild)
console.log(caixa1.lastElementChild)
console.log(caixa1.children)

//como chegar ao document pelo js

console.log(document.getRootNode())
console.log(btn[0].getRootNode())
console.log(btn[0].ownerDocument)
//console.log(caixa1.children[caixa1.children.length - 1])