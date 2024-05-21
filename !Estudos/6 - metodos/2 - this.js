function aluno(nome, nota){
    this.nome = nome
    this.nota = nota

    this.dados_ano = function(){
        setTimeout(function(){
           console.log(this.nome) 
           console.log(this.nota) 
        }, 1000)
    }//não funciona pq a arrow function puxa direto da função aluno, e a function normal não
    this.dados_arrow = function(){
        setTimeout(()=>{
           console.log(this.nome) 
           console.log(this.nota) 
        }, 1000)
    }
}

const al1 = new aluno('Kaique', 10)
al1.dados_ano(  )
al1.dados_arrow(  )