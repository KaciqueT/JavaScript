const btnAlert = document.getElementById("btnAlert")
const btnConfirm = document.getElementById("btnConfirm")
const btnPrompt = document.getElementById("btnPrompt")

btnAlert.addEventListener("click", (evt) => {
    alert("Olá Mundo")
})

btnConfirm.addEventListener("click", (evt) => {
    const ret = confirm("Posso roubar seu S2?🥺")
    console.log(ret)
    if(ret){
        console.log("Ok pressionado")
    }else{
    console.log("Cancelar pressionado")
    }
})

btnPrompt.addEventListener("click", (evt) => {
    const nome = prompt("Digite seu nome:", "Digite seu nome aqui.")
    if(nome == null){
        console.log("Cancelar pressionado")
    }else{
        console.log("Nome: " + nome)
    }
})
