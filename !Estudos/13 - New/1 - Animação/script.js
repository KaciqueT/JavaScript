const carro = document.getElementById("carro")
const btn_esquerda = document.getElementById("btn_esquerda")
const btn_direita = document.getElementById("btn_direita")
const Parar = document.getElementById("Parar")

const init = () => {
    carro.style = "position: relative; left: 0px; width: 100px"
    tamMax = window.innerWidth - parseInt(carro.style.width)
}

let anima = null
let tamMax = null


const mover = (dir) => {
    if(dir > 0){
        if(parseInt(carro.style.left) <= tamMax){
            carro.style.left = parseInt(carro.style.left) + (10*dir) + "px"
            anima = setTimeout(mover, 20, dir)
        }else{
            clearTimeout(anima)
        }

    }else if(dir < 0){
        if(parseInt(carro.style.left) >= 0){
                carro.style.left = parseInt(carro.style.left) + (10*dir) + "px"
                anima = setTimeout(mover, 20, dir)
        }else{
            clearTimeout(anima)
        }
    }
}

Parar.addEventListener("click",() => {
    clearTimeout(anima)
    // clearInterval(anima)
})

btn_esquerda.addEventListener("click",() => {
    clearTimeout(anima)
    mover(-1)
    if(parseInt(carro.style.left) >= 0){
        mover(1)
    }else{
        mover(-1)
    }
    // clearInterval(anima)
    // anima = setInterval(mover, 20, -1)
    // carro.style.left = parseInt(carro.style.left) - 10 + "px"

})

btn_direita.addEventListener("click",() => {
    clearTimeout(anima)
    mover(1)
    if(parseInt(carro.style.left) <= tamMax){
        mover(-1)
    }else{
        mover(1)
    }
    // clearInterval(anima)
    // anima = setInterval(mover, 20, 1)
    // let pos = parseInt(carro.style.left)
    // pos+=10
    // carro.style = `position: relative; left: ${pos}px`
})

//window.onload=init
window.addEventListener("load",init())
window.addEventListener("resize",() => {
    tamMax = window.innerWidth - parseInt(carro.style.width)
})