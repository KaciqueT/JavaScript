function* contador(){
    let i = 0
    while(true){
        yield i++
        if(i > 100){
            break
        }
    }
}
const itc = contador()
for(let c of itc){
    console.log(c)
}

/*for(let i = 0; i <= 10; i++){
    console.log(itc.next().value)
}*/


//

/*function* perguntas(){
    const nome = yield 'Qual seu nome?'
    const esporte = yield 'Qual seu esporte favorito?'
    return 'Seu nome é ' + nome + ', e seu esporte favorito é ' + esporte
}
const itp = perguntas()
console.log(itp.next().value)
console.log(itp.next('Kaique').value)
console.log(itp.next('Futebol').value)*/

//

/*function* cores(){
    yield 'Vermelho'
    yield 'Verde'
    yield 'Azul'
    yield 'Amarelo'
}

let itc = cores()
console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value)*/