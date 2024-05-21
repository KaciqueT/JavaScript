const c1 = document.getElementById("c1")
const c2 = document.getElementById("c2")
const c3 = document.getElementById("c3")
const c4 = document.getElementById("c4")
const c5 = document.getElementById("c5")
const c6 = document.getElementById("c6")
const c7 = document.getElementById("c7")

const arrayElementos = [c1, c2, c3, c4, c5, c6, c7]
//console.log(arrayElementos)

arrayElementos.map((e)=>{
    console.log(e)
    e.innerHTML = "Kaique"
})//bom para percorrer todos os elementos de um array


// for(d of arrayElementos){
//     d.innerHTML = "Kaique"
// }

// console.log(c1)
// console.log(c1.id)
// console.log(c1.innerHTML)
// c1.innerHTML = "Kaique"
// c2.innerHTML = "Dev"
