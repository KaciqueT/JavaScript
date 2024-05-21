function contar() {

    var ini = document.getElementById('inicio')
    var fim = window.document.getElementById('fim')
    var pas = document.getElementById('passo')
    var res = document.querySelector('div#res')

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = 'Impossivel contar!'
        window.alert('[Erro] Faltam Dados!')
    }else{
        res.innerHTML = 'Contando: </br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pas.value)

        if (p <= 0){
            window.alert('Passo invalido! Considerando Passo 1')
            p = 1
        }
        
        if(i < f){ //contagem crescente
            for(var c = i; c <= f; c += p){
                res.innerHTML += ` ${c} 👉`//windows e .
            }
        }else{ //contagem regressiva
            for(var c = i; c >= f; c -= p){
                res.innerHTML += ` ${c} 👉`
            }
        }
        res.innerHTML += `\u{1F3C1}`//codigo de emoji
    }
}