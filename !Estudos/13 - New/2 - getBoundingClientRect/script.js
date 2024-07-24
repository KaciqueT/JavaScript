const q1 = document.getElementById("q1")
const q2 = document.getElementById("q2")
const posX = document.getElementById("posX")
const posY = document.getElementById("posY")
const largura = document.getElementById("largura")
const altura = document.getElementById("altura")

console.log(q1.getBoundingClientRect())

let DOMrect_q1 = q1.getBoundingClientRect()
let DOMrect_q2 = q2.getBoundingClientRect()

const info = (el) => {
    let DOMrect = el.getBoundingClientRect()
    posX.innerHTML = `posX: ${DOMrect.x}`
    posY.innerHTML = `posY: ${DOMrect.y}`
    largura.innerHTML = `Largura: ${DOMrect.width}`
    altura.innerHTML = `Altura: ${DOMrect.height}`
}

q1.addEventListener("click", (evt) => {
    info(evt.target)
})

q2.addEventListener("click", (evt) => {
    info(evt.target)
})