import {Mensagem} from "./mensagem.js"

const config = {
     cor: "#42a",
     tipo: "ok", //tipo: ok, sn, oc
     textos: ["SIM", "NÃO"],
     comando_SN:()=>{}

//     tipo: "Alerta"
 }

const funcSIM = () => {
    console.log("Botão SIM pressionado.")
}

const btn_msg = document.getElementById("btn_msg")
const btn_msg1 = document.getElementById("btn_msg1")
const btn_msg2 = document.getElementById("btn_msg2")

btn_msg.addEventListener("click", ()=>{
    config.tipo = "ok"
    Mensagem.mostrar(config, "Curso de Javascript!","Caixa de mensagem personalizada.")
})

btn_msg1.addEventListener("click", ()=>{
    config.tipo = "sn"
    config.comando_SN = () => {funcSIM()}
    Mensagem.mostrar(config, "Kaique Tsimitakis","Formado em Analise e Desenvolvimento de Sistemas. <br> 21 anos. <br> Focado em ser Desenvolvedor Front-End.")
})
btn_msg2.addEventListener("click", ()=>{
    config.tipo = "sn"
    config.textos = ["OK", "CANCELAR"]
    Mensagem.mostrar(config, "Ferramentas","Javascript. <br> HTML e CSS. <br>")
})
