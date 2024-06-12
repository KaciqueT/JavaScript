const Pessoa = {
    nome,
    idade, 
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
const P2 = Pessoa
const P3 = Pessoa

P3.nome = "Ugo"
P2["nome"] = "Murila"
Pessoa.setNome("Jaqueline")

console.log(Pessoa.nome)
console.log(P2.getNome())
console.log(P3.nome)