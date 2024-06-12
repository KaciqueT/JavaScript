const res = document.querySelector(".res")
const btn = document.querySelector("#btnAdd")
const btnRemove = document.querySelector("#btnRem")

class Dados{
    constructor(elenome, eleidade){
        this.nome = elenome
        this.idade = eleidade
    }
    getNome(){
        return this.nome
    }
    getIdade(){
        return this.idade
    }

    setNome(nome){
        this.nome = nome
    }
    setIdade(idade){
        this.nome = idade
    }

    info(){
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
