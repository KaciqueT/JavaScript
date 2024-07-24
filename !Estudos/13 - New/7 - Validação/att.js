const nome = document.querySelector("#nome")
const nota = document.querySelector("#nota")
const msg = document.querySelector("#msg")

document.querySelector("#btnValidar").addEventListener("click", (evt) => {
    let message = null
    
    if(nota.validity.valueMissing){
        message = ("Bora fi, este campo é obrigatório.")
    }else if(nota.validity.rangeOverflow){
        message = ("É só até 10 gênio.")
    }else if(nota.validity.rangeUnderflow){
        message = ("Negativado só no banco, cabeça.")
    }
    
    msg.innerHTML = message
    //nota.reportValidity()
    //msg.innerHTML = nota.validationMessage
    evt.preventDefault()
})