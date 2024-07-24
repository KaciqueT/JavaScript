const objetos = document.getElementById("objetos")

let pc = {
    cpu:"",
    ram:"",
    ssd:"",
    info:function(){
        console.log(`CPU:${this.cpu}`)
        console.log(`RAM:${this.ram}`)
        console.log(`SSD:${this.ssd}`)
    }
}

pc["monitor"] = "22pol"
pc.placa = "RTX"

// delete(pc.ssd) //undefined

const C1 = Object.assign({}, pc)
// C1.info()

const C2 = Object.create(pc)
C2.cpu = "I11"
C2.ram = "64gb"
C2.ssd = "5tb"
C2.info()

const o1 = {obj1: '1'}
const o2 = {obj2: '2'}
const o3 = {obj3: '3'}
const o4 = Object.assign(o1, o2, o3)
console.log(o4)

const computador = [
    {
        cpu:"Ryzen 5",
        ram:"8gb",
        ssd:"540gb"
    },
    {
        cpu:"I5",
        ram:"8gb",
        ssd:"540gb"
    },
    {
        cpu:"Ryzen 7",
        ram:"16gb",
        ssd:"540gb"
    },
]
computador.forEach((c) => {
    const div = document.createElement("div")
    div.setAttribute("class", "computador")
    div.innerHTML = c.cpu + "<br/>" +  c.ram + "<br/>" + c.ssd
    objetos.appendChild(div)
})

// pc.info()
// console.log(computador)
// objetos.innerHTML = JSON.stringify(computador)
// pc.cpu + " - " + pc.ram + " - " + pc.ssd