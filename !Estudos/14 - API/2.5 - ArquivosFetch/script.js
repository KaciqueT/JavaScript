const texto = document.querySelector("#texto")

const endpoint = "JS.txt"

fetch(endpoint)
.then(res => res.text())
.then(res => {
    res = JSON.parse(res);
    console.log(res.Nome);
    //texto.innerHTML = res
})