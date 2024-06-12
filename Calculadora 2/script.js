const teclasNUM = [...document.querySelectorAll(".num")] 
const teclasOP = [...document.querySelectorAll(".op")]
const teclaRES = document.querySelector(".res")
const display = document.querySelector(".display")
const Tcopy = document.getElementById("Tcopy")
const Tlimpar = document.getElementById("Tlimpar")
const Tigual = document.getElementById("T=")
 
let sinal = false
let decimal = false

teclasNUM.forEach((el) => {
    el.addEventListener("click", (evt) =>{
        sinal = false
        if(evt.target.innerHTML == ","){
            if(!decimal){
                decimal = true
                if(display.innerHTML == "0"){
                    display.innerHTML = "0,"
                }else{
                    display.innerHTML += evt.target.innerHTML
                }
            }
        }else{
            if(display.innerHTML == "0"){
                display.innerHTML = ""
            }
            display.innerHTML += evt.target.innerHTML
        }
    })
})

teclasOP.forEach((el) => {
    el.addEventListener("click", (evt) =>{
        if(!sinal){
            sinal = true
            if(display.innerHTML == "0"){
                display.innerHTML = ""
            }
            if(evt.target.innerHTML == "x"){
                display.innerHTML += "*"
            }else{
                display.innerHTML += evt.target.innerHTML
            }
            
        }
    })
})


Tlimpar.addEventListener("click", (evt) =>{
    display.innerHTML = "0"
    sinal = false
    decimal = false
})

Tigual.addEventListener("click", (evt) =>{
    sinal = false
    decimal = false
    const res = eval(display.innerHTML) //serve para fazer operações matematicas
    display.innerHTML = res
})

Tcopy.addEventListener("click", (evt) =>{
    navigator.clipboard.writeText(display.innerHTML)//copia para a area de transferencia o conteudo do display
    //.select() deixa selecionado o resultado - para adaptar pro mobile
    //.setSelectionRange(0, 999999999) para adaptar pro mobile
})



