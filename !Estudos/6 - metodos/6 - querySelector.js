const query = document.querySelector("div") //pega o primeiro elemento selecionado
//const queryTUDO = [...document.querySelectorAll("div[class]")] //pega tudo(pode ser array)
//([class] é especificação)
const queryTUDO = [...document.querySelectorAll("div > p")] //seleção dentro de div
const queryCursos = document.querySelectorAll(".curso") 
const queryC1 = document.querySelectorAll(".c1,p") 
const queryC2 = document.querySelectorAll(".c2")
const queryUM = document.querySelectorAll("#c2")[0] //puxar id

console.log(query)
console.log(queryTUDO)
console.log(queryCursos)
console.log(queryC1)
console.log(queryC2)
console.log(queryUM)
