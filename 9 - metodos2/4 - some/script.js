const p_array = document.querySelector("#array")
const btnVerificar = document.querySelector("#btnVerificar")
const resultado = document.querySelector("#resultado")

const elementos = [21, 25, 19, 20, 16, 18, 22]
p_array.innerHTML = "[" + elementos + ']'

btnVerificar.addEventListener("click", () => {
    const retorno = elementos.every((e, i) => {
        if(e < 18){
            resultado.innerHTML = "Array não conforme na posição " + i
        }
        return e >= 18
    })
    if(retorno){
        resultado.innerHTML = "Ok "
    }
})