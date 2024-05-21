const p_array = document.querySelector("#array")
const btnVerificar = document.querySelector("#btnVerificar")
const resultado = document.querySelector("#resultado")

const elementos = [13, 15, 9, 10, 19, 8, 2]
p_array.innerHTML = "[" + elementos + ']'

btnVerificar.addEventListener("click", () => {
    const retorno = elementos.some((e, i) => {
        if(e < 18){
            resultado.innerHTML = "Array não conforme na posição " + i
        }
        return e >= 18
    })
    if(retorno){
        resultado.innerHTML = "Ok "
    }
})
// no every se uma das variaveis estiver errada, tudo fica errado, tudo precisa estar certo para dar certo ooooxoo
// no some se uma das variaveis estiver certa, tudo fica certo, apenas um precisa estar certo para dar certo xxxxoxx