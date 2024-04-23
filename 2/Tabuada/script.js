function contar(){

    var num = document.getElementById('num')
    var tab = document.getElementById('tab')

    if(num.value.length == 0){
        window.alert('Dados Incorretos!')
    }else{
        var n = Number(num.value)
        var x = 1

        tab.innerHTML = ''

        while(x <= 10){
            let item = document.createElement('option')
            item.text = `${n} x ${x} = ${n*x}`
            item.value = `tab${x}`
            tab.appendChild(item)
            x++
        }
    }
}


