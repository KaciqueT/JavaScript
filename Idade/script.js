function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('anonas')
    var res = document.querySelector('div#res')

    if(fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fsex[0].checked){
            genero = 'Homem'
            
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'Imagens/bebemenino.jpg')
            }else if(idade >= 10 && idade < 21){
                img.setAttribute('src', 'Imagens/jovemhomem.jpg')
            }else if(idade >= 21 && idade < 50){
                img.setAttribute('src', 'Imagens/adultohomem.jpg')
            }else{
                img.setAttribute('src', 'Imagens/idosohomem.jpg')
            }

        }else if(fsex[1].checked){
            genero = 'Mulher'
            
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'Imagens/bebemenina.jpg')
            }else if(idade >= 10 && idade < 21){
                img.setAttribute('src', 'Imagens/jovemmulher.jpg')
            }else if(idade >= 21 && idade < 50){
                img.setAttribute('src', 'Imagens/adultomulher.jpg')
            }else{
                img.setAttribute('src', 'Imagens/idosomulher.jpg')
            }
        }
        img.style.borderRadius = '100%'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}