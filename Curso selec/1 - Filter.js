const caixaCursos = document.querySelector("#caixaCursos")
const btn = [...document.querySelectorAll(".curso")]
const cursos = ["HTML", "CSS", "JavaScript", "PHP", "React.js", "Vue.js", "MySQL"]
const btnselect = document.getElementById("btnSelect")
const btnRemove = document.getElementById("btnRemove")
const btnAddAntes = document.getElementById("btnAddAntes")
const btnAddDepois = document.getElementById("btnAddDepois")
const nomeCurso = document.getElementById("nomeCurso")

let ind = 0

const criarCurso = (curso) => {
        const novo = document.createElement("div")
        novo.setAttribute("id","c" + ind)
        novo.setAttribute("class", "curso c1")
        novo.innerHTML = curso
    
        const comandos = document.createElement("div")
        comandos.setAttribute("class", "comandos")
    
        const rb = document.createElement("input")
        rb.setAttribute("type", "radio")
        rb.setAttribute("name", "rb_curso")
    
        comandos.appendChild(rb)
    
        novo.appendChild(comandos)

        return novo
}
cursos.map((el, key) => {
    const novoele = criarCurso(el)
    caixaCursos.appendChild(novoele)
    ind++
})

const cursoSelecioando = () =>{
    const todosRadio = [...document.querySelectorAll("input[type = radio]")]
    let filtroradio = todosRadio.filter((ele, ind, arr) => {
        return ele.checked //filter esta filtrando por todos os botoes que podem ser selecionados
    })
    return filtroradio[0]
}

btnselect.addEventListener("click", (evt) => {
    const filtroradio = cursoSelecioando()

    if(filtroradio !== undefined){
        const cursoSelect = filtroradio.parentNode.previousSibling.textContent
        alert(`Curso Selecionado: ${cursoSelect}`)
    }else{
        alert(`Seleciona um curso!`)
    }
    
})

btnRemove.addEventListener("click", (evt) => {
    const filtroradio = cursoSelecioando()

    try{ //um if mais simplificado
        const cursoSelect = filtroradio.parentNode.parentNode
        cursoSelect.remove()
    }catch(error){
        alert(`Seleciona um curso!`)
    }
})

btnAddAntes.addEventListener("click", (evt) => {
    const filtroradio = cursoSelecioando()

    try{ //um if mais simplificado
        if(nomeCurso.value != ""){
        const cursoSelect = filtroradio.parentNode.parentNode
        const novocurso = criarCurso(nomeCurso.value)
        caixaCursos.insertBefore(novocurso, cursoSelect)
        }else{
            alert(`Digite o nome do curso!`)
        }
    }catch(error){
        alert(`Seleciona um curso!`)
    }
})

btnAddDepois.addEventListener("click", (evt) => {
    const filtroradio = cursoSelecioando()

    try{ //um if mais simplificado
        if(nomeCurso.value != ""){
        const cursoSelect = filtroradio.parentNode.parentNode
        const novocurso = criarCurso(nomeCurso.value)
        caixaCursos.insertBefore(novocurso, cursoSelect.nextSibling)
        }else{
            alert(`Digite o nome do curso!`)
        }
    }catch(error){
        alert(`Seleciona um curso!`)
    }
})


// Arvore Genealogica
// .parentNode
// .childNodes [nodenumber]
// .firstChild
// .lastChild
// .nextSiblind
// .previousSibling