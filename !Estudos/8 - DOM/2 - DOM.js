const caixa1 = document.querySelector("#caixa1")
const btn = [...document.querySelectorAll(".curso")]
const c1f2 = document.querySelector("#c1f1")

console.log(c1f2.parentNode.parentNode.children[4])//parentElement

console.log(caixa1.hasChildNodes())
console.log(btn[0].hasChildNodes())
console.log(btn[0].childNodes)

//caixa1.firstElementChild.innerHTML = "Teste" / altera só o primeiro
caixa1.children[1].innerHTML = "Teste"




console.log(btn[0].children.length > 0 ? "Possui filhos" : "Não possui filhos")

//é um if else mais simplificado

// if(btn[0].children.length > 0){
//     console.log("Possui filhos")
// }else{
//     console.log("Não possui filhos")
// }
