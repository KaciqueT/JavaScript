const palco = document.getElementById("palco")
const num_objetos = document.getElementById("num_objetos")
const quant = document.getElementById("quant")
const btnAdd = document.getElementById("btnAdd")
const btnRemover = document.getElementById("btnRemover")

let larguraPalco = palco.offsetWidth
let alturaPalco = palco.offsetHeight
let bolas = []
let numBola = 0

class Bola{
    constructor(arrayBOLA, palco){
        this.tam = Math.floor(Math.random() * 15)+ 10
        this.r = Math.floor(Math.random() * 255)
        this.g = Math.floor(Math.random() * 255)
        this.b = Math.floor(Math.random() * 255)
        this.pX = Math.floor(Math.random() * (larguraPalco - this.tam))
        this.pY = Math.floor(Math.random() * (alturaPalco - this.tam))
        this.velX = Math.floor(Math.random() * 2)+ 0.5
        this.velY = Math.floor(Math.random() * 2)+ 0.5
        this.dirX = (Math.random()*10) > 5? 1: -1
        this.dirY = (Math.random()*10) > 5? 1: -1
        this.palco = palco
        this.arrayBOLA = arrayBOLA
        this.id = Date.now() + "_" + Math.floor(Math.random()*100000000000)
        this.desenhar()
        this.controle = setInterval(this.controlarB, 10)
        this.eu = document.getElementById(this.id)
        numBola++
        num_objetos.innerHTML = numBola
    }

    PosBola = () => {
        return this.arrayBOLA.indexOf(this)
    }

    remover = () => {
        clearInterval(this.controle)
        bolas = bolas.filter((b) => {
            if(b.id != this.id){
                return b
            }
        })
        this.eu.remove()
        numBola--
        num_objetos.innerHTML = numBola
    }

    desenhar = () => {
        const div = document.createElement("div")
        div.setAttribute("id", this.id)
        div.setAttribute("class", "bola")
        div.setAttribute("style", `left:${this.pX}px;top:${this.pY}px;width:${this.tam}px;height:${this.tam}px;background-color:rgb(${this.r},${this.g},${this.b})`)
        this.palco.appendChild(div)
    }

    colisaoBordas = () => {
        if(this.pX + this.tam >= larguraPalco){
            this.dirX = -1
        }else if(this.pX <= 0){
            this.dirX = 1

        }if(this.pY + this.tam >= alturaPalco){
            this.dirY = -1
        }else if(this.pY <= 0){
            this.dirY = 1
        }
    }

    controlarB = () => {
        this.colisaoBordas()
        this.pX += this.dirX * this.velX
        this.pY += this.dirY * this.velY
        this.eu.setAttribute("style", `left:${this.pX}px;top:${this.pY}px;width:${this.tam}px;height:${this.tam}px;background-color:rgb(${this.r},${this.g},${this.b})`)
        if((this.pX > larguraPalco)||(this.pY > alturaPalco)){
            this.remover()
        }
    }
}

window.addEventListener("resize", (evt) => {
    larguraPalco = palco.offsetWidth
    alturaPalco = palco.offsetHeight
})

btnAdd.addEventListener("click", (evt) => {
    const qtde = quant.value
    for(let i = 0 ; i < qtde ; i++){
        bolas.push(new Bola(bolas, palco))
    }
})

btnRemover.addEventListener("click", (evt) => {
    bolas.map((b) => {
        b.remover()
    })
})