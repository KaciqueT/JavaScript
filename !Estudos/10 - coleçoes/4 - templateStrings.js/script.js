const caixa = document.querySelector("#caixa")

const jogos = ["Mario", "Zelda", "GTA", "God of war"]

let ul = '<ul>'
jogos.map((el) => {
    ul += `<li>${el}</li>`
})
ul += `</ul>`

// const nome = "Kaique"
// const cidade = "Bragança Paulista"
// const frase = nome + " mora em " + cidade (forma antiga)
// const frase = `${nome} mora em ${cidade}. <br/> Ele quer ser o melhor programador do mundo!`

caixa.innerHTML = ul