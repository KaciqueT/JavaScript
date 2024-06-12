const caixa = document.querySelector("#caixa")

let cores = ["Amarelo", "Azul", "Verde", "Vermelho", ["Claro", "Escuro", "Fosco"]]

let cursos = ["HTML", "CSS", "JavaScript", cores]

// cursos[0] = "C++"

// cursos.push("C++")
// cursos.push("Python")
// cursos.unshift("Vue.js")  add no começo da lista
// cursos.shift() retira o primeiro elemento
// cursos.pop() retira o ultimo elemento

console.log(cursos[3][4][1]) //matriz cores - array - escuro

cursos.map((el) => {
    let p = document.createElement("p")
    p.innerHTML = el
    caixa.appendChild(p)
})
 