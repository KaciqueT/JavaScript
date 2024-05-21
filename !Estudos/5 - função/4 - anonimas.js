const f = new Function("v1", "v2" , "v3", "return v1 + v2 + v3")//Função construtor anonima
    /*{let res = 0

    for(v of valores){
        res += v
    }

    return res}*/

console.log(f(10, 5, 15))