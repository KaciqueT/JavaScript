//const soma = function(v1, v2){return v1 + v2}

const soma = (v1, v2) => {
    let res = v1 + v2
    return res
}
console.log(soma(10, 15))

//Arrow function é mais eficaz

const valor = n => n
console.log(valor("Kaique"))

// não precisa por return

const add = v => v + 10
console.log(add(10))