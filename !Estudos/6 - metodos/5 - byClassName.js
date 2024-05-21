const cursos = [...document.getElementsByClassName("curso")]
const cursosc1 = [...document.getElementsByClassName("c1")]
const cursosc2 = [...document.getElementsByClassName("c2")]
const elemento = document.getElementsByClassName("curso")[0]

console.log(cursos)
console.log(cursosc1)
console.log(cursosc2)
console.log(elemento)

cursosc1.map((el)=>{
    el.classList.add("destaque")//dá destaque feito no css
})