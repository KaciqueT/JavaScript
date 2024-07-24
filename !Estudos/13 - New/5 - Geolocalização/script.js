const longitude = document.getElementById("longitude")
const latitude = document.getElementById("latitude")

if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(mostrarLocal, erroLocal)

}else{
    console.log("Não suportada")

}

function mostrarLocal(pos){
    console.log(pos)
    latitude.innerHTML = `Latitude: ${pos.coords.latitude}`
    longitude.innerHTML = `Longitude: ${pos.coords.longitude}`
}

function erroLocal(pos){
    console.log("Erro ao obter a localização")
}