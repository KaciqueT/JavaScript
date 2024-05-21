function soma(...valores){
    let res = 0

    for(let v of valores){
        res += v
    }

    /*for(let i = 0; i < tam ; i++){
        res += valores[i]
    }*/

    return res

}

console.log(soma(10, 5, 2, 15, 8))