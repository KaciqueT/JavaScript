let num = [5, 8, 2, 9, 3]
//num.length = quantas casas tem o num
//num[0] = primeiro valor / num[6] = ultimo valor
num.sort() // deixa na ordem crescente
num.push(1)//adiciona valor
console.log(num)
console.log(`O vetor é tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(8)//Buscar a posição de um valor

if(pos == -1){
    console.log('O valor não foi encontrado')
}else{
    console.log(`O valor 8 está na posição ${pos}`)
}
// var = num.lenght - 1 = num[var]
//console.log(`${30 / num.length}`)
