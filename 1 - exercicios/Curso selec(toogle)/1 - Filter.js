const caixaCursos = document.querySelector("#caixaCursos")
const btn = [...document.querySelectorAll(".curso")]
const cursos = ["HTML", "CSS", "JavaScript", "PHP", "React.js", "Vue.js", "MySQL"]
const btnselect = document.getElementById("btnSelect")
const btnRemove = document.getElementById("btnRemove")
const btnAddAntes = document.getElementById("btnAddAntes")
const btnAddDepois = document.getElementById("btnAddDepois")
const nomeCurso = document.getElementById("nomeCurso")

let ind = 0

const tirarSelect = () => {
    const cursosSelect = [...document.querySelectorAll(".selecionado")]
    cursosSelect.map((el) => {
        el.classList.remove("selecionado")
    })
}

const criarCurso = (curso) => {
        const novo = document.createElement("div")
        novo.setAttribute("id","c" + ind)
        novo.setAttribute("class", "curso c1")
        novo.innerHTML = curso
        novo.addEventListener("click", (evt) => {
            tirarSelect()
            evt.target.classList.toggle("selecionado")
        })
        return novo
}
cursos.map((el, key) => {
    const novoele = criarCurso(el)
    caixaCursos.appendChild(novoele)
    ind++
})

const cursoSelecionado = () =>{
    const cursosSelect = [...document.querySelectorAll(".selecionado")]
    return cursosSelect[0]
}

btnselect.addEventListener("click", (evt) => {
    try{ //um if mais simplificado
        alert('Curso Selecionado: ' + cursoSelecionado().innerHTML)
    }catch(error){
        alert(`Selecione um curso!`)
    }
    
})

btnRemove.addEventListener("click", (evt) => {
    const cs = cursoSelecionado()
    if(cs != undefined){
        cs.remove()
    }else{
        alert("Selecione um curso!")
    }
})

btnAddAntes.addEventListener("click", (evt) => {
    try{ //um if mais simplificado
        if(nomeCurso.value != ""){
        const novocurso = criarCurso(nomeCurso.value)
        caixaCursos.insertBefore(novocurso, cursoSelecionado())
        }else{
            alert(`Digite o nome do curso!`)
        }
    }catch(error){
        alert(`Selecione um curso!`)
    }
})

btnAddDepois.addEventListener("click", (evt) => {
    try{ //um if mais simplificado
        if(nomeCurso.value != ""){
        const novocurso = criarCurso(nomeCurso.value)
        caixaCursos.insertBefore(novocurso, cursoSelecionado().nextSibling)
        }else{
            alert(`Digite o nome do curso!`)
        }
    }catch(error){
        alert(`Selecione um curso!`)
    }
})


// Arvore Genealogica
// .parentNode
// .childNodes [nodenumber]
// .firstChild
// .lastChild
// .nextSiblind
// .previousSibling