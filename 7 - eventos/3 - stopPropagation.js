const caixa1 = document.getElementById("caixa1")
const c1 = document.querySelector("#c1")
const cursos = [...document.querySelectorAll(".curso")]

caixa1.addEventListener("click", (evt) => {
    console.log(evt.target) 
})

cursos.map((el) => {
    el.addEventListener("click", (evt) => {
        evt.stopPropagation()//trava a interação
    }) 
})

// c1.addEventListener("click", (evt) => {
//     evt.stopPropagation()
// })
