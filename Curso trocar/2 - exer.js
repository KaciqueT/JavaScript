const caixa1 = document.getElementById("caixa1")
const caixa2 = document.getElementById("caixa2")
const btn = document.querySelector("#btn_copy")
//const botao = document.querySelector("#btn_volt")
const todos = [...document.querySelectorAll(".curso")]

todos.map((el) => {
    el.addEventListener("click", (evt) => {
        const curso = evt.target
        curso.classList.toggle("selecionado")
    })
})

btn.addEventListener("click", () => {
    const c_selecionados = [...document.querySelectorAll(".selecionado")]
    const c_naoselecionados = [...document.querySelectorAll(".curso:not(.selecionado)")]//dos elementos da classe curso, os que não tem .selecionado
    console.log(c_naoselecionados)
    c_selecionados.map((el) => {
        caixa2.appendChild(el)
    })
    c_naoselecionados.map((el) => {
        caixa1.appendChild(el)
    })
})

// botao.addEventListener("click", () =>{
//     const c_selecionados = [...document.querySelectorAll(".selecionado")]
//     c_selecionados.map((el) => {
//         caixa1.appendChild(el)
//     })
// }) criei um botão voltar, copiei o addevent e troquei o endereço do botao e o appendchild
