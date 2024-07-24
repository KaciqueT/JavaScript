const nome = document.querySelector("#nome")
const nota = document.querySelector("#nota")
const msg = document.querySelector("#msg")

document.querySelector("#btnValidar").addEventListener("click", (evt) => {
    //let ValidationMSG = null
    // if(!nota.checkValidity()){
    //     ValidationMSG = nota.validationMessage
    // }

    let estadoValidação = nota.validity
    
    if(estadoValidação.valueMissing){
        nota.setCustomValidity("Bora fi, este campo é obrigatório.")
    }else if(estadoValidação.rangeOverflow){
        nota.setCustomValidity("É só até 10 gênio.")
    }else if(estadoValidação.rangeUnderflow){
        nota.setCustomValidity("Negativado só no banco, cabeça.")
    }

    //msg.innerHTML = ValidationMSG

    nota.reportValidity()
    //msg.innerHTML = nota.validationMessage
    evt.preventDefault()
})

//Metodos de Validação do DOM
//checkValidity()
//setCustomValidity()

//Propriedade de validação do DOM
//validity
//validationMessage

//Propriedades de validação
/*
customError: true, se uma mensagem de validação personalizada for definida.
patternMismatch: true, se o valor de um elemento não corresponder ao seu atributo padrão
rangeOverflow: true, se o valor de um elemento for maior que seu atriburo MAX.
rangeUnderflow: true, se o valor de um elemento for menor que seu atributo MIN.
stepMismatch: true, se o valor de um elemento for inválido por seu atributo step.
tooLong: true, se o valor de um elemento exceder seu atributo maxLength.
typeMismatch: true, se o valor de um elemento for inválido por ser atributo type.
valueMissing: true, se o elemento (com um atributo obrigatorio) não tiver valor.
valid: true, se o valor de um elemento for válido
*/