const mais = document.getElementById("mais")
const menos = document.getElementById("menos")
const vezes = document.getElementById("vezes")
const dividir = document.getElementById("dividir")
const res = document.getElementById("res")

const ope = [
    () => {
        const num = [document.getElementById("num1").value, document.getElementById("num2").value]
        res.value = Number(num[0])+Number(num[1])
    },
    () => {
        const num = [document.getElementById("num1").value, document.getElementById("num2").value]
        res.value = Number(num[0])-Number(num[1])
    },
    () => {
        const num = [document.getElementById("num1").value, document.getElementById("num2").value]
        res.value = Number(num[0])*Number(num[1])
    },
    () => {
        const num = [document.getElementById("num1").value, document.getElementById("num2").value]
        res.value = Number(num[0])/Number(num[1])
    },
]

mais.addEventListener("click",ope[0])
menos.addEventListener("click",ope[1])
vezes.addEventListener("click",ope[2])
dividir.addEventListener("click",ope[3])