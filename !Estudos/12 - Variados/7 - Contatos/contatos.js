import { contatos } from "./banco.js";

const removeCont = (nome) => {
    contatos = contatos.filter((nome) => {
        return nome
    })
}


let contato = {
    getTodosContatos: function(){
        return contatos
    },
    getContato: function(ind){
        return contatos[ind]
    },
    addContato: function(novoContato, destinoDOM){
        const cont={
            nome: novoContato.nome,
            telefone: novoContato.telefone,
            email: novoContato.email
        }
        contatos.push(cont)
        destinoDOM.innerHTML = ""
        
        contatos.forEach((c) => {
            const div = document.createElement("div")
            div.setAttribute("class","contato")

            const pNome = document.createElement("p")
            pNome.innerHTML = c.nome
            const pTelefone = document.createElement("p")
            pTelefone.innerHTML = c.telefone
            const pEmail = document.createElement("p")
            pEmail.innerHTML = c.email
            
            const BTNX = document.createElement("button")
            BTNX.innerHTML = "Remover"

            BTNX.addEventListener("click",(evt) => {
                nome.parentNode.delete


                // const APAGUE = evt.target.parentNode.dataset.nome
                // console.log(APAGUE)
                // removeCont(APAGUE)
                // contatos()
            })
            

            div.appendChild(pNome)
            div.appendChild(pTelefone)
            div.appendChild(pEmail)
            div.appendChild(BTNX)
            destinoDOM.appendChild(div)

        })
    },

}


export default contato
