const p_array = document.querySelector("#array")
const txt_pesquisar = document.querySelector("#txt_pesquisar")
const btnPesquisar = document.querySelector("#btnPesquisar")
const resultado = document.querySelector("#resultado")

const elementos = ["HTML", "CSS", "JavaScript", "PHP", "React.js", "Vue.js", "MySQL"] //[10, 5, 8, 2, 9, 15, 20]

p_array.innerHTML = "[" + elementos + ']'

btnPesquisar.addEventListener("click", () => {
    resultado.innerHTML = "Valor não encontrado."
    const ret = elementos.find((e, i) => {
        if(e.toLowerCase() == txt_pesquisar.value.toLowerCase()){//converte a pesquisa para independer de maiuscula e minuscula
            resultado.innerHTML = "Valor pesquisado: " + e + " encontrado " + i
            return e
        }
    })
    console.log(ret)
})