import c from "./contatos.js";

const listaCont = document.getElementById("listaCont")
const btn = document.getElementById("btn")
const btnX = document.getElementById("btnRemove")

btn.addEventListener("click", () => {
    const cont={
        nome:document.getElementById("nome").value,
        telefone:document.getElementById("telefone").value,
        email:document.getElementById("email").value,
    }

    c.addContato(cont, listaCont )


    console.log(c.getTodosContatos())
})

btnX.addEventListener("click", (evt) => {
    listaCont.innerHTML=''
})