const url = document.getElementById("url")
const btn = document.getElementById("btn")

btn.addEventListener("click", (evt) => {
    // window.location = "aula1.html"
    // window.location = "https://www.youtube.com/" 
    // window.location.replace("https://www.youtube.com/") //apaga o historico recente
    //window.location.assign("https://www.youtube.com/") //faz a mesma coisa e não remove do historico
    // window.location.reload() //recarrega a pagina
    // window.history.back() //volta a pagina
    // window.history.forward() //avança a pagina
    // window.history.go(1) //avança o tanto de paginas pré colocadas
    console.log(window.history.length)//olha o tamanho do historico
    window.location = url.value
})
