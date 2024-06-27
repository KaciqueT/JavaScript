const olho = [...document.getElementsByClassName("olho")]

let Xmouse = 0
let Ymouse = 0

window.addEventListener("mousemove", (evt) => { //pega a posição do mouse
    Xmouse = evt.clientX
    Ymouse = evt.clientY

    const rot = Math.atan2(Ymouse, Xmouse) * 240/Math.PI //retorna o arco tangente de X e Y ou, o angulo em radianos
    //pi transforma o radiano em graus


    olho.forEach((o) => {

        o.style.transform = "rotate("+ rot +"deg)"
    })
})

// olho[0].style.transform = "rotate("+ 240 +"deg)"
