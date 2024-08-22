class Mensagem{
    static cor = "#888"
    static destino = null
    static divmsg = null
    static tipo = null
    static textos = []
    static comando_SN = null
    

    static mostrar = (config, titulo, texto) => {
        this.cor = config.cor
        this.tipo = config.tipo
        this.textos = config.textos
        this.comando_SN = () => {config.comando_SN()}
        this.destino = document.body
        this.titulo = titulo
        this.texto = texto

        this.divmsg = document.createElement("div")
        const estilo_divmsg =
            "display: flex;"+
            "justify-content: center;"+
            "align-items: center;"+
            "position: absolute;"+
            "top: 0px"+
            "left: 0px;"+
            "width: 100%;"+
            "height: 100vh;"+
            "background-color: rgba(0,0,0,0.7);"
        this.divmsg.setAttribute("id", "divmsg")
        this.divmsg.setAttribute("style", estilo_divmsg)
        this.destino.prepend(this.divmsg)

        const areaMSG = document.createElement("div")
        const estilo_areaMSG =
            "display: flex;"+
            "justify-content: flex-start;"+
            "align-items: flex-start;"+
            "flex-direction: column;"+
            "width: 300px;"

        areaMSG.setAttribute("style", estilo_areaMSG)
        this.divmsg.appendChild(areaMSG)

        const tituloMSG = document.createElement("div")
        const estilo_titulo =
            "display: flex;"+
            "justify-content: flex-start;"+
            "align-items: center;"+
            "width: 100%;"+
            "background-color:" + this.cor + ";"+
            "color: #fff;"+
            "padding: 5px;"+
            "border-radius: 5px 5px 0px 0px;"

        tituloMSG.setAttribute("style", estilo_titulo)
        tituloMSG.innerHTML = this.titulo
        areaMSG.appendChild(tituloMSG)
            
        const corpoMSG = document.createElement("div")
        const estilo_corpo =
            "display: flex;"+
            "justify-content: flex-start;"+
            "align-items: center;"+
            "width: 100%;"+
            "background-color: #eee;"+
            "color: #000;"+
            "padding: 30px 5px;"
        corpoMSG.setAttribute("style", estilo_corpo)
        corpoMSG.innerHTML = this.texto
        areaMSG.appendChild(corpoMSG)

        const rodapeMSG = document.createElement("div")
        const estilo_rodape =
            "display: flex;"+
            "justify-content: space-around;"+
            "align-items: center;"+
            "width: 100%;"+
            "background-color: #ccc;"+
            "color: #000;"+
            "padding: 5px;"+
            "border-radius: 0px 0px 5px 5px;"
        rodapeMSG.setAttribute("style", estilo_rodape)
        areaMSG.appendChild(rodapeMSG)
    
        const estilo_btn =
            "background-color:" + this.cor + ";"+
            "color: #fff;"+
            "padding: 10px 10px;"+
            "border-radius: 5px;"+
            "cursor: pointer;"+
            "width: relative;"+
            "text-transform: uppercase;"
            if(this.tipo == "ok"){
                const btn_ok = document.createElement("button")
                btn_ok.setAttribute("style", estilo_btn)
                btn_ok.innerHTML += "OK"

                btn_ok.addEventListener("click", (evt) => {
                    this.ocultar()
                })
                rodapeMSG.appendChild(btn_ok)

            }else if(this.tipo == "sn"){
                const btn_sim = document.createElement("button")
                btn_sim.setAttribute("style", estilo_btn)
                btn_sim.innerHTML = this.textos[0]

                btn_sim.addEventListener("click", (evt) => {
                    this.comando_SN()
                    this.ocultar()
                })
                rodapeMSG.appendChild(btn_sim)

                const btn_nao = document.createElement("button")
                btn_nao.setAttribute("style", estilo_btn)
                btn_nao.innerHTML = this.textos[1]

                btn_nao.addEventListener("click", (evt) => {
                    this.ocultar()
                })
                rodapeMSG.appendChild(btn_nao)
            }  
    }

    static ocultar = () => {
            this.divmsg.remove()
        }
}
export {Mensagem}
