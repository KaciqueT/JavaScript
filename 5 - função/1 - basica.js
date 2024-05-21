function canal(){ //Retorno de função
    let m1 = 10
    let m2 = 2
    let res = m1 * m2

    if(res % 2 == 0){
        return "Par"
    }else{
        return "Impar"
    }

}

let num=canal()
console.log(num)


/*function texto(){
    let d1 = document.getElementById("teste")
    let d2 = document.getElementById("n1")
    let d3 = document.getElementById("n2")

    d1.innerHTML = "Eu"
    d2.innerHTML = "Te"
    d3.innerHTML = "Amo"
}*/

/*function soma(){
    let n1 = 2
    let n2 = 10
    let soma = n1 + n2
    console.log("10 + 2 = " + soma)
}

for(let i = 0; i < 10; i++){
    soma()
}*/