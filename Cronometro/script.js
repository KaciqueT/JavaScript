const timer = document.getElementById("timer")
const btn_iniciar = document.getElementById("btn_iniciar")
const btn_parar = document.getElementById("btn_parar")
const btn_zerar = document.getElementById("btn_zerar")
const btn_salvar = document.getElementById("btn_salvar")
const reserva = document.getElementById("parciaisregistradas")

let intervalo = null
let tmpIni = null

 const contador = () => {
    const tmpAtual = Date.now()
    let seg = (tmpAtual - tmpIni)/1000
    timer.innerHTML = converter(seg)
 }

 const converter = (seg) => {
    let hora = Math.floor(seg/3600)
    let resto = seg%3600
    let minutos = Math.floor(resto/60)
    let segundos = Math.floor(resto%60)
    let formata = (hora<10?"0"+hora:hora) + ":" + (minutos<10?"0"+minutos:minutos) + ":" + (segundos<10?"0"+segundos:segundos)
    
    return formata
 }

 btn_iniciar.addEventListener("click", (evt) => {
    tmpIni = Date.now()
    intervalo = setInterval(contador,1000)
 })
 
 btn_parar.addEventListener("click", (evt) => {
    clearInterval(intervalo)
 })
 
 btn_zerar.addEventListener("click", (evt) => {
    tmpIni = Date.now()
    timer.innerHTML = '00:00:00'
    clearInterval(intervalo)
    reserva.innerHTML = ""
 })

 btn_salvar.addEventListener("click", (evt) => {
    let p = "<p>" + timer.innerHTML + "</p>"
    reserva.innerHTML += p
 })