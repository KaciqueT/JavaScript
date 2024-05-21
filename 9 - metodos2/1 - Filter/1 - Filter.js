const filtromaior = (valor) => {
    if(valor >= 18){
        return valor
    }
    
}
//const filtromaior = (valor, indice, array) => {

const idades = [15, 21, 30, 18, 17, 44, 12, 50]
const maior = idades.filter((valor, indice, array) => {
    if(valor >= 18){
        return valor
    }
})
const menor = idades.filter((valor, indice, array) => {
    if(valor < 18){
        return valor
    }
})


console.log(idades)
console.log(maior)
console.log(menor)