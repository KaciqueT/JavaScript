// (mais direta) - const colecaoHTML = [...document.getElementsByTagName("div")]

let colecaoHTML = document.getElementsByTagName("div")
colecaoHTML = [...colecaoHTML]

console.log(colecaoHTML)

colecaoHTML.map((e)=>{
    console.log(e)
})

// console.log(arrayElementos)
// console.log(colecaoHTML)