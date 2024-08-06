const carro = document.getElementById("carro")
const Rodar = document.getElementById("Rodar")
const Parar = document.getElementById("Parar")

const init = () => {
    carro.style = "position: relative; left: 0px; width: 100px; height: 40px;"
    tamCarro = parseInt(carro.style.width)
    tamMax = window.innerWidth - tamCarro
}

let anima = null
let tamMax = null
let tamCarro = null
let dir = 0

const mover = (dir) => {
    if(parseInt(carro.style.left) >= tamMax){
        dir = -1
    }else if(parseInt(carro.style.left) <= 0){
        dir = 1
    }
    carro.style.left = parseInt(carro.style.left) + (10*dir) + "px"
    anima = setTimeout(mover, 20, dir)
}

Parar.addEventListener("click",() => {
    clearTimeout(anima)
})

Rodar.addEventListener("click",() => {
    mover()
})



window.addEventListener("load",init())
window.addEventListener("resize",() => {
    tamMax = window.innerWidth - parseInt(carro.style.width)
})
window.addEventListener("keydown", (evt) =>{
    if(evt.code === "ArrowUp"){
        carro.style.width = parseInt(carro.style.width) + 10 + "px"
        carro.style.height = parseInt(carro.style.height) + 10 + "px"
    }
    if(evt.code === "ArrowDown"){
        carro.style.width = parseInt(carro.style.width) - 10 + "px"
        carro.style.height = parseInt(carro.style.height) - 10 + "px"
    }
    tamCarro = parseInt(carro.style.width)
    tamMax = window.innerWidth - tamCarro
})