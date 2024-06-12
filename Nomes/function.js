const res = document.querySelector(".res")
const btn = document.querySelector("#btnAdd")
const btnRemove = document.querySelector("#btnRem")

function Dados(elenome, eleidade){
    
    this.nome = elenome,
    this.idade = eleidade,

    this.getNome=function(){
        return this.nome
    },
    this.getIdade=function(){
        return this.idade
    },

    this.setNome=function(nome){
        this.nome = nome
    },
    this.setIdade=function(idade){
        this.nome = idade
    },

    this.info=function(){
        console.log(`Nome: ${this.nome}`)
        console.log(`Idade: ${this.idade}`)
        console.log( )
    }
}

// let g1 = new Dados(paranome, paraidade)

let pessoas = []

const addPessoa = ()=>{
    res.innerHTML = ''
    pessoas.map((p)=>{
        const div = document.createElement("div")
        div.setAttribute("class", "pessoa")
        div.innerHTML = `Nome: ${p.getNome()} <br/>Idade: ${p.getIdade()}`
        res.appendChild(div)
    })
}

btnAdd.addEventListener("click", (evt) => {
    const paranome = document.getElementById("nome")
    const paraidade = document.getElementById("idade")

    const p = new Dados(paranome.value, paraidade.value)
    pessoas.push(p)
    paranome.value = ""
    paraidade.value = ""
    paranome.focus()
    addPessoa()

})

btnRemove.addEventListener("click", (evt) => {
    res.innerHTML=''
})

