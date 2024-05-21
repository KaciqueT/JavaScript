const caixa1 = document.querySelector("#caixa1")
const btn = [...document.querySelectorAll(".curso")]
const c1f2 = document.querySelector("#c1f1")
const cursos = ["HTML", "CSS", "JS", "Vue.js", "C++", "React.js", "ReactNative"]

cursos.map((el, key) => { //adiciona div e elementos por js

    const novo = document.createElement("div")
    novo.setAttribute("id", "c" + key)
    novo.setAttribute("class", "curso c1")
    novo.innerHTML = el
    caixa1.appendChild(novo)
})

// const novo = document.createElement("div")
// novo.setAttribute("id", "c7")
// novo.setAttribute("class", "curso c1")
// novo.innerHTML = 'ReactNative'

