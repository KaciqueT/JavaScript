const pessoa = {
    nome: "Kaique",
    sobrenome: "Tsimitakis",
    curso: "Javascript",
    aulas:{
        aula1: "Introdução",
        aula2: "Variaveis",
        aula3: "Condicionais"
    }
}

const Ajson = '{"nome":"Kaique","sobrenome":"Tsimitakis","curso":"Javascript","aulas":{"aula1":"Introdução","aula2":"Variaveis","aula3":"Condicionais"}'
const Sjson = JSON.stringify(pessoa) //Converte objeto em string JSON
const Pjson = JSON.parse(Sjson) //Converte string JSON em objeto


console.log(pessoa)
console.log(Sjson)
console.log(Pjson)
// console.log(pessoa.nome)
// console.log(pessoa.aulas.aula2)