const dataDisplay = document.getElementById("dataDisplay")
const relogio = document.getElementById("relogio")
const divAlarme = document.getElementById("divAlarme")
const horaAlarme = document.getElementById("horaAlarme")
const tempoAlarme = document.getElementById("tempoAlarme")
const BTNativar = document.getElementById("BTNativar")
const BTNparar = document.getElementById("BTNparar")
const timer = document.getElementById("timer")

const somAlarme = new Audio("alarme.mp3")
somAlarme.loop = -1

let ts_atual = null
let ts_alarme = null
let alarme_ativado = false
let alarme_tocando = false

BTNativar.addEventListener("click", () => {
    ts_atual = Date.now()
    ts_alarme = ts_atual + (tempoAlarme.value * 1000)
    alarme_ativado = true
    const dt_alarme = new Date(ts_alarme)
    horaAlarme.innerHTML = `Hora do Alarme: ${dt_alarme.getHours()} : ${dt_alarme.getMinutes()} : ${dt_alarme.getSeconds()}`
})

BTNparar.addEventListener("click", () => {
    alarme_ativado = false
    alarme_tocando = false
    horaAlarme.innerHTML = `Hora do Alarme: `
    tempoAlarme.value = 0
    timer.classList.remove("alarme")
    somAlarme.pause();
    somAlarme.currentTime = 0;
})

const data = new Date()

let dia = data.getDate() 
dia = dia < 10?"0" + dia:dia

let mes = data.getMonth()
mes = parseInt(mes)
mes = mes + 1
mes = mes < 10?"0" + mes:mes

const dataR = dia + "/" + mes + "/" + data.getFullYear()
dataDisplay.innerHTML = dataR

//                        RELOGIO

const horas = () => {
    const data = new Date()
    
    let hora = data.getHours()
    hora = hora < 10?"0" + hora:hora

    let minuto = data.getMinutes()
    minuto = minuto < 10?"0" + minuto:minuto
    
    let segundo = data.getSeconds() 
    segundo = segundo < 10?"0" + segundo:segundo

    const Hcompleta = hora + ":" + minuto + ":" + segundo

    relogio.innerHTML = Hcompleta

    if(alarme_ativado && !alarme_tocando){
        if(data.getTime() >= ts_alarme){
            alarme_tocando = true
            somAlarme.play()
            timer.classList.add("alarme")
        }
    }
}

const intervalo = setInterval(horas, 1000)
horas()

// console.log(`Dia: ${data.getMonth()}`)

// getDate() = Dia do mês
// getDay() = Dia da Semana (numero)
// getFullYear() = Ano com 4 digitos
// getHours() = Horas
// getMilliseconds() = Milisegundos
// getMinutes() = Minutos
// getMonth() = Mes
// getSeconds() = Segundos
// getTime() = Timestamp (milisegundos desde 1 de Janeiro de 1970, 00:00:00 UTC)
// Date.now() = Timestamp (milisegundos desde 1 de Janeiro de 1970, 00:00:00 UTC)
// getTimezoneOffset() = Timezone da localidade
// setDate() = Define um dia do mes para a data
// setMonth() = Define um mes para a data
// setFullYear() = Define um ano para a data
// setHours() = Define horas
// setMinutes() = Define minutos
// setSeconds() = Define Segundos
// setMilliseconds() = Define Milisegundos
// toDateString() = Retorna somente a data
