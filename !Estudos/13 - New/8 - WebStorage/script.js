const f_texto = document.getElementById("f_texto")
const p_texto = document.getElementById("p_texto")
const btn = document.getElementById("btn")

btn.addEventListener("click", (evt) => {

})

const curso = "Javascript"
let num=10

window.localStorage.setItem("numero",num)
localStorage.setItem("num2",33)
localStorage.setItem("nome","Kaique")
localStorage.setItem("curso",curso)
// alert(localStorage.length)

//alert(localStorage.getItem(localStorage.key(0)))

//alert(localStorage.getItem("numero"))

localStorage.clear()

sessionStorage.setItem("num2",33)
sessionStorage.setItem("nome","Kaique")
sessionStorage.setItem("curso",curso)