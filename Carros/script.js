const btnRemove = document.querySelector("#btnRem")
const militar = document.querySelector("#tipoMilitar")
const normal = document.querySelector("#tipoNormal")
const blindagem = document.querySelector("#blindagem")
const municao = document.querySelector("#municao")
const carros = document.querySelector("#carros")
const btn = document.querySelector("#btnAdd")
const nome = document.querySelector("#nome")
const portas = document.querySelector("#porta")
const cor = document.querySelector("#cor")

let colecaoCarros = []

const removeCarro = (quem) => {
    colecaoCarros = colecaoCarros.filter((el) => {
        return el.nome != quem
    })
}

militar.addEventListener("click", (evt)=>{
    nome.value = ""
    portas.value = 0
    cor.value = ""
    blindagem.value = 0
    municao.value = 0
    console.log("teste")
    blindagem.removeAttribute("disabled")
    municao.removeAttribute("disabled")
}) 
normal.addEventListener("click", (evt)=>{
    console.log("teste")
    blindagem.setAttribute("disabled", "disabled")
    municao.setAttribute("disabled", "disabled")//disabled com o valor disabled, funcionou só assim
    nome.value = ""
    portas.value = 0
    cor.value = ""
    blindagem.value = 0
    municao.value = 0
})  

const gerenciarExib = () => {
    carros.innerHTML=""
    colecaoCarros.forEach((c)=>{
        const div = document.createElement("div")
        const btnX = document.createElement("button")
        btnX.innerHTML = "Remover"
        btnX.addEventListener("click", (evt) => {
            const APAGUE = evt.target.parentNode.dataset.nome
            removeCarro(APAGUE)
            gerenciarExib()
        })
        div.setAttribute("class", "carro")
        div.setAttribute("data-nome", c.nome)
        div.innerHTML = `Nome: ${c.nome}<br/>`
        div.innerHTML += `Portas: ${c.portas}<br/>`
        div.innerHTML += `Cor: ${c.cor}<br/>`
        div.innerHTML += `Blindagem: ${c.blindagem}<br/>`
        div.innerHTML += `Munição: ${c.municao}<br/>`
        div.appendChild(btnX)
        carros.appendChild(div)
    })
    
} 

btnAdd.addEventListener("click", ()=>{
    if(normal.checked){
        const c = new Carro(nome.value, portas.value, cor.value)
        colecaoCarros.push(c)
    }else{
        const c = new Militar(nome.value, portas.value, cor.value, blindagem.value, municao.value)
        colecaoCarros.push(c)
    }
    gerenciarExib()
})

btnRemove.addEventListener("click", (evt) => {
    carros.innerHTML=''
})

class Carro{ //classe pai
    constructor(nome, portas, cor){
        this.nome = nome
        this.portas = portas
        this.ligado = false
        this.vel = 0
        this.cor = cor
    }
    ligar = function(){
        this.ligado = true
    }
    desligar = function(){
        this.ligado = false
    }
    setCor = function(cor){
        this.cor = cor
    }
}

class Militar extends Carro{//classe filha
    constructor(nome, portas, blindagem, municao){
        super(nome, portas, cor)
        this.blindagem = blindagem
        this.municao = municao
    }
    atirar = function(){
        if(this.municao > 0){
            this.municao--
        }
    }
}
class Utilitario extends Carro{
    constructor(nome, portas, lugares){
        super(nome, portas, cor)
        this.lugares = lugares
    }
}

// const c1 = new Carro("Normal", 4)
// c1.ligar()
// c1.setCor("Preto")

// const c2 = new Militar("Blindado", 6, 100, 50)
// c2.setCor("Verde")
// c2.atirar()
// c2.atirar()
// c2.atirar()
// c2.atirar()
// c2.atirar()

// console.log(`Nome: ${c1.nome}`)
// console.log(`Portas: ${c1.portas}`)
// console.log(`Ligado: ${(c1.ligado? "Sim":"Não")}`)
// console.log(`Velocidade: ${c1.velocidade}`)
// console.log(`Cor: ${c1.cor}`)
// console.log(`Lugares: ${c1.lugares}`)
// console.log(`   `)

// console.log(`Nome: ${c2.nome}`)
// console.log(`Portas: ${c2.portas}`)
// console.log(`Ligado: ${(c2.ligado? "Sim":"Não")}`)
// console.log(`Velocidade: ${c2.velocidade}`)
// console.log(`Blindagem: ${c2.blindagem}`)
// console.log(`Munição: ${c2.municao}`)
// console.log(`Cor: ${c2.cor}`)
// console.log(`   `)
