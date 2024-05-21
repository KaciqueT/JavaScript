const objs = document.getElementsByTagName("div")

let num = [10, 20, 30, 40, 50]

for(n in num){
    console.log(n)//mostra o externo, posição no array
}

for(n of num){
    console.log(n)//mostra o interno, valor do array
}

/*for(let i = 0; i < num.length; i++){
    console.log(i + " = " + num[i])
}*/