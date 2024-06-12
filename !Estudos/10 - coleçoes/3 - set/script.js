const caixa = document.querySelector("#caixa")

let musicas = new Set(["Musica", "HeavyMetal", "Musica 10"])

musicas.add("Rock")
// musicas.add("Rock")
// musicas.add("HeavyMetal")
// musicas.delete("Rock")
// musicas.clear()

console.log(musicas)

// musicas.forEach((el) => {
//     caixa.innerHTML += el + '<br/>'
// })

for(let m of musicas){
    caixa.innerHTML += m + "<br/>"
}