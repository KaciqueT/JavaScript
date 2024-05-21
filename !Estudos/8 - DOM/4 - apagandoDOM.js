const caixa1 = document.querySelector("#caixa1")
const btn = [...document.querySelectorAll(".curso")]
const c1f2 = document.querySelector("#c1f1")
const cursos = ["HTML", "CSS", "JS", "Vue.js", "C++", "React.js", "ReactNative"]

cursos.map((el, key) => { //adiciona div e elementos por js

    const novo = document.createElement("div")
    novo.setAttribute("id", "c" + key)
    novo.setAttribute("class", "curso c1")
    novo.innerHTML = el
    
    const btn_lixo = document.createElement("img")
    btn_lixo.setAttribute("src", "./cry.png")
    btn_lixo.setAttribute("class", "lixo")
    btn_lixo.addEventListener("click", (evt) => {
        caixa1.removeChild(evt.target.parentNode)
        //caixa1.removeChild(evt.target)
    })

    novo.appendChild(btn_lixo)

    caixa1.appendChild(novo)
})
