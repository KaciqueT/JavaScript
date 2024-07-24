const temp = document.getElementById("temp")
const nivel = document.getElementById("nivel")
const press = document.getElementById("press")
const btn = document.getElementById("btn")
const endpoint = "http://127.0.0.1:1880/JS"//SegundaAPI

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
    const endpoint = "http://127.0.0.1:1880/gravar"
    fetch(endpoint, cabecalho)
    .then(res => res.json())
    .then(ret =>{
        console.log(ret)
    })
}

btn.addEventListener('click', (evt) => {
    GravarDados()
})