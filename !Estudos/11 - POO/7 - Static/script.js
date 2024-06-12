class Npc{
    static alerta = false
    constructor(energia){
        this.energia = energia
        // this.alerta = false -> static substitui
    }
    info = function(){
        console.log(`Energia: ${this.energia}`)
        console.log(`Alerta: ${Npc.alerta?"Sim":"Não"}`)
        console.log(` `)
    }
    static alertar = function(){
        Npc.alerta = true
    }
}

const npc1 = new Npc(100)
const npc2 = new Npc(80)
const npc3 = new Npc(30)
const npc4 = new Npc(0)

Npc.alertar() //alerta todos os NPCS

// Npc.alerta = true
// npc2.alerta = true
// npc3.alerta = true
// npc4.alerta = true

npc1.info()
npc2.info()
npc3.info()
npc4.info()