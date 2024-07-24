const texto = document.getElementById("texto")
const btn = document.getElementById("btn")
const endpoint = "https://dd5ec749-865f-4b03-8a70-6fb3ff47c928-00-2uzd69rx5cdk9.kirk.replit.dev/"//PrimeiraAPI

const obterDados = () => {
fetch(endpoint)
// .then(res => console.log(res))
.then(res => res.text())//json()

.then(dados =>{
    texto.innerHTML = dados
})
}
btn.addEventListener('click', (evt) => {
obterDados()
})