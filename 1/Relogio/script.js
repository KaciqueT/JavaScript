function carregar(){
    var msg = window.document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora < 6){
        img.src = 'Fotos/madrugada.jpg'
        document.body.style.background = 'black'

    }else if(hora < 12){
        img.src = 'Fotos/manha.jpg'
        document.body.style.background = '#89c8fb'

    }else if(hora < 18){
        img.src = 'Fotos/tarde.jpg'
        document.body.style.background = '#fcb817'
        
    }else{
        img.src = 'Fotos/noite.jpg'
        document.body.style.background = '#264a7c'

    }
}