let num = document.querySelector('input#num')
let lista = document.querySelector('select#lista')
let res = document.getElementById('res')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    } 
}
function isLista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false

    }
}

function adicionar(){

    if(isNumero(num.value) && !isLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    }else{
        window.alert('Dados Incorretos ou já encontrado na lista!')
    }
    num.value = ''
    num.focus()//foca o cursor na div de escrita
}

function finalizar(){

    if(valores.length == 0){

        window.alert('Adicionar valores antes de Finalizar!')
    }else{

        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior)
                maior = valores[pos]
            if(valores[pos] < menor)
                menor = valores[pos]    
        }
        media = soma / tot

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados. </p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
        res.innerHTML += `<p>A media dos valores digitado é ${media}</p>`
    }

}