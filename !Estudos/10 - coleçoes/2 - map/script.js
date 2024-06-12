const caixa = document.querySelector("#caixa")

let mapa = new Map()

mapa.set("curso", "JS") 
mapa.set("Primeiro", "HTML") 
mapa.set("Segundo", "CSS") 
mapa.set("Faculdade", "IF") 
mapa.set(1, "CCA")

mapa.delete("")

console.log(mapa)

let pes = "Segundo"
let res = ""

if(mapa.has(pes)){
    res = "A chave existe na coleção - " + mapa.get(pes)
}else{
    res = "A chave não está na coleção"
}
res += "<br/> O tamanho da coleção é " + mapa.size

caixa.innerHTML = res

mapa.forEach((el)=>{
    console.log(el)
})