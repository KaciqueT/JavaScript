class Padrao{
    constructor(){
        //classes abstradas
        if(this.constructor === Padrao){
            throw new TypeError("Esta classe não pode ser instanciada") //metodo de erro no node
        }
        if(this.ligar === undefined){
            throw new TypeError("É obrigatorio implementar o metodo ligar") 
        }
        if(this.desligar === undefined){
            throw new TypeError("É obrigatorio implementar o metodo desligar") //mesmo que vazio
        }
        this.rodas = 4
        this.portas = 4
        this.ligado = false
    }
}

class Carro extends Padrao{
    constructor(tipo, estTurbo){
        super()
        this.turbo = new Turbo(estTurbo)
        if(tipo = 1){
            this.velMax = 120
            this.nome = "Normal"
        }else if(tipo = 2){
            this.velMax = 160
            this.nome = "Esportivo"
        }else if(tipo = 3){
            this.velMax = 200
            this.nome = "Corrida"
        }
        this.velMax += this.turbo.pot
    }
    info(){
        console.log(`Nome: ${this.nome}`)
        console.log(`Velocidade Maxima: ${this.velMax}`)
        console.log(`Portas: ${this.portas}`)
        console.log(`Rodas: ${this.rodas}`)
        console.log(`Ligado: ${this.ligado}`)
        console.log(`Turbo: ${this.turbo}`)
        console.log(" ")
    }
    ligar(){
        this.ligado = true
    }
    desligar(){
        this.ligado = false
    }
}

class Turbo{
    constructor(e){
        if(e == 0){
            this.pot = 0 
        }else if(e == 1){
            this.pot = 50 
        }else if(e == 2){
            this.pot = 75
        }else if(e == 3){
            this.pot = 100
        }
    }
}

class CarroX extends Carro{
    constructor(estTurbo){
        super(4, estTurbo) // super é sempre a primeira coisa no constructor
        this.tipoInfo = 0
        this.velMax = 300 + this.turbo.pot
        this.portas = 2
        this.nome = "Especial"
    } //só aqui que está o polimorfismo, tem que chamar o info(pai) se nao sobrepoe
    info(){
        if(this.tipoInfo == 1){
            super.info()
        }else{
            console.log(`Nome: ${this.nome}`)
            console.log(`Velocidade Maxima: ${this.velMax}`)
            console.log(`Portas: ${this.portas}`)
            console.log(`Turbo: ${this.turbo.pot}`)
            console.log(" ")
        }
        
    }
}

const c1 = new Carro(1, 0)
const c2 = new Carro(1, 1)
const c3 = new CarroX(3)//não precisa passar o tipo nesse
// const c4 = new Padrao() 

c1.info()
c2.info()
c3.info()