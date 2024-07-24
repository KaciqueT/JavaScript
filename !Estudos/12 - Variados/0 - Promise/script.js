const numero = document.getElementById("numero")
const Promessa = document.getElementById("Promessa")

Promessa.addEventListener("click",() => {
    numero.innerHTML = "Processando..." 
    promessa()
        
    .then((retorno) => {
        numero.innerHTML = retorno
        numero.classList.remove("erro")
        numero.classList.add("ok")
    })
    
    .catch((retorno) => {
        numero.innerHTML = retorno
        numero.classList.add("erro")
        numero.classList.remove("ok")
    })
})

const promessa = () => {
    let p = new Promise((resolve, reject) => {
        let resultado = true
        let tempo = 3000
        setTimeout(() => {
            if(resultado){
                resolve("Deu tudo certo")
            }else{
                reject("Deu tudo errado")
            }
        }, tempo)
    })
    return p
}



numero.innerHTML = "Esperando" 