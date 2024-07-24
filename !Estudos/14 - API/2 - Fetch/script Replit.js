const temp = document.getElementById("temp")
const nivel = document.getElementById("nivel")
const press = document.getElementById("press")
const btn = document.getElementById("btn")
const endpoint = "https://704d6f00-e2a4-4710-80bb-aac6a6d85a4a-00-fm2d2z3uoqiz.janeway.replit.dev/"//SegundaAPI

const obterDados = () => {

fetch(endpoint)//, (method: "get")
// .then(res => console.log(res))
.then(res => res.json())//text()
.then(dados =>{
    console.log(dados)
    temp.innerHTML = `Temperatura = ${dados.temperatura}`
    nivel.innerHTML = `Nivel = ${dados.nivel}`
    press.innerHTML = `Pressão = ${dados.pressao}`
})

}
let intervalo = setInterval(obterDados, 1800)

//mandando dados pra API
let dados = {
    nome: "Kaique",
    idade: "21",
    curso: "Javascript"
}

let cabecalho = {
    method: "POST", 
    body: JSON.stringify(dados)
}

const GravarDados = () => {
    const endpoint = "https://704d6f00-e2a4-4710-80bb-aac6a6d85a4a-00-fm2d2z3uoqiz.janeway.replit.dev/"
    fetch(endpoint, cabecalho)
    .then(res => res.json())
    .then(ret =>{
        console.log(ret)
    })
}

btn.addEventListener('click', (evt) => {
    GravarDados()
})