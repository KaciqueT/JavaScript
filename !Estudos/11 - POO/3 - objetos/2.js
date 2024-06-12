class Jogo{
    nome = "Kaique "

    constructor(elenome, eletipo){
        this.nome = elenome
        if(eletipo == 1){
            this.tipo = "Ação"
            this.preco = 300

        }else if(eletipo == 2){
            this.tipo = "Aventura"
            this.preco = 150

        }else if(eletipo == 3){
            this.tipo = "Plataforma"
            this.preco = 100

        }else{
            this.tipo = "Indie"
            this.preco = 50
        
        }
    }
    getNome(){
        return this.nome
    }
    getTipo(){
        return this.tipo
    }
    getPreco(){
        return this.preco
    }
    getInfo(){
        return [this.nome, this.tipo, this.preco]
    }


    setNome(nome){
        this.nome = nome
    }
    setTipo(tipo){
        this.tipo = tipo
    }
    setPreco(preco){
        this.preco = preco
    }


    info(){
        console.log(`Nome: ${this.nome}`)
        console.log(`Genero: ${this.tipo}`)
        console.log(`Preço: ${this.preco}`)
        console.log( )
    }
}


let g1 = new Jogo("GTA", 1)
let g2 = new Jogo("God of War", 2)
let g3 = new Jogo("Minecraft", 4)
let g4 = new Jogo("Super Mario", 3)

g1.setNome("Assassins")
g1.setTipo("Stealth")
g1.setPreco(150)

g1.info()

// console.log(g1.getNome())
// console.log(g1.getInfo())
// g1.info()
// g2.info()
// g3.info()
// g4.info()