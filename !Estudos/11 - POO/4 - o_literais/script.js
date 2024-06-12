const res = document.querySelector(".res")
const btn = document.querySelector("#btnAdd")
const btnRemove = document.querySelector("#btnRem")
const paranome = document.getElementById("nome")
const paraidade = document.getElementById("idade")

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

btnAdd.addEventListener("click", () => {
    const Pessoa = {
        nome: "",
        idade: "", 
        getNome:function(){
            return this.nome
        },
        setNome:function(nome){
            this.nome = nome
        },
        getIdade:function(){
            return this.idade
        },
        setIdade:function(idade){
            this.idade = idade
        },
    }

    Pessoa.setNome(paranome.value)
    Pessoa.setIdade(paraidade.value)
    pessoas.push(Pessoa)
    paranome.value = ""
    paraidade.value = ""
    paranome.focus()
    addPessoa()
})

btnRemove.addEventListener("click", () => {
    res.innerHTML=''
})