class Login{

    static logado = false;
    static matLogado = null;
    static nomeLogado = null;
    static acessoLogado = null;

    static estilocss = null;

    static callback_Ok = null;
    static callback_NaoOk = null;

    static endpoint = "https://86607a0e-9c90-47c8-b094-7698f3fba1d7-00-3f98ywmplbdpb.janeway.replit.dev/";
    //https://86607a0e-9c90-47c8-b094-7698f3fba1d7-00-3f98ywmplbdpb.janeway.replit.dev/?matricula=123&senha=321

    static config = {
        cor: "rgb(131, 2, 2)",
        img: "./logo.png"
    };

    static login = (callback_Ok, callback_NaoOk, config = null) => {
        if(config != null){
            this.config = config;
        }
        //this.endpoint += `?matricula=${mat}&senha=${pas}`

        this.callback_Ok = () => {callback_Ok()};
        this.callback_NaoOk = () => {callback_NaoOk()};

        this.estilocss = 
        ".fundoLogin{display: flex; justify-content: center; align-items: center; width: 100%; height: 100vh; position: absolute; top: 0px; left: 0px; background-color: rgba(0, 0, 0, 0.75); box-sizing: border-box;}"+
        ".baseLogin{display: flex; justify-content: center; align-items: stretch; width: 50%; box-sizing: inherit;}"+
        ".elementosLogin{display: flex; justify-content: center; align-items: center; flex-direction: column; width: 50%; background-color:rgb(212, 212, 212); padding: 10px; border-radius: 10px 0px 0px 10px; box-sizing: inherit;}"+
        ".logoLogin{display: flex; justify-content: center; align-items: center; width: 50%; background-color: rgb(255, 255, 255); padding: 0px 10px; border-radius: 0px 10px 10px 0px; box-sizing: inherit;}"+
        ".logoLogin img{width: 90%; box-sizing: inherit;}"+
        ".campoLogin{display: flex; justify-content: flex-start; align-items: flex-start; flex-direction: column; box-sizing: inherit; margin-bottom: 10px;}"+
        ".campoLogin label{font-size: 18px;}"+
        ".campoLogin input{font-size: 18px; padding: 5px; background-color: white; border-radius: 5px;}"+
        ".botaoLogin{display: flex; width: 100%; justify-content: space-around; align-items: center; margin: 10px; box-sizing: inherit;}"+
        `.botaoLogin button{cursor: pointer; background-color: ${this.config.cor}; color: white; border-radius: 8px; padding: 5px 15px; box-sizing: inherit;}`

        const styleestilo = document.createElement("style");
        styleestilo.setAttribute("id","id_estilo");
        styleestilo.setAttribute("rel","stylesheet");
        styleestilo.setAttribute("type","text/css");
        styleestilo.innerHTML = this.estilocss;

        document.head.appendChild(styleestilo)

        const fundoLogin = document.createElement("div");
        fundoLogin.setAttribute("id","fundoLogin");
        fundoLogin.setAttribute("class","fundoLogin");
        document.body.prepend(fundoLogin);

        const baseLogin = document.createElement("div");
        baseLogin.setAttribute("id","baseLogin");
        baseLogin.setAttribute("class","baseLogin");
        fundoLogin.appendChild(baseLogin);

        const elementosLogin = document.createElement("div");
        elementosLogin.setAttribute("id","elementosLogin");
        elementosLogin.setAttribute("class","elementosLogin");
        baseLogin.appendChild(elementosLogin);

        //nome

        const campoLoginUsername = document.createElement("div");
        campoLoginUsername.setAttribute("id","campoLoginUsername");
        campoLoginUsername.setAttribute("class","campoLogin");
        elementosLogin.appendChild(campoLoginUsername);

        const labelUsername = document.createElement("label");
        labelUsername.innerHTML = "Usuario:";
        campoLoginUsername.appendChild(labelUsername);

        const inputUsername = document.createElement("input");
        inputUsername.setAttribute("id","f_nomeusuario");
        inputUsername.setAttribute("type","text");
        inputUsername.setAttribute("name","f_nomeusuario");
        campoLoginUsername.appendChild(inputUsername);

        //senha
        
        const campoLoginSenha = document.createElement("div");
        campoLoginSenha.setAttribute("id","campoLoginSenha");
        campoLoginSenha.setAttribute("class","campoLogin");
        elementosLogin.appendChild(campoLoginSenha);

        const labelSenha = document.createElement("label");
        labelSenha.innerHTML = "Senha:";
        campoLoginSenha.appendChild(labelSenha);

        const inputSenha = document.createElement("input");
        inputSenha.setAttribute("id","f_senhausuario");
        inputSenha.setAttribute("type","password");
        inputSenha.setAttribute("name","f_senhausuario");
        campoLoginSenha.appendChild(inputSenha);

        //botao

        const botaoLogin = document.createElement("div");
        botaoLogin.setAttribute("class","botaoLogin");
        elementosLogin.appendChild(botaoLogin);

        const btnLogin = document.createElement("button");
        btnLogin.setAttribute("id","btnLogin");
        btnLogin.innerHTML = "Login";
        btnLogin.addEventListener("click", (evt)=>{
            this.verificarLogin();

        });
        botaoLogin.appendChild(btnLogin);

        const btnCancelar = document.createElement("button");
        btnCancelar.setAttribute("id","btnCancelar");
        btnCancelar.innerHTML = "Cancelar";
        btnCancelar.addEventListener("click", (evt)=>{
            this.fechar();
        });
        botaoLogin.appendChild(btnCancelar);

        //imagem

        const logoLogin = document.createElement("div");
        logoLogin.setAttribute("id","logoLogin");
        logoLogin.setAttribute("class","logoLogin");
        baseLogin.appendChild(logoLogin);

        const imglogoLogin = document.createElement("img");
        imglogoLogin.setAttribute("src", this.config.img);
        imglogoLogin.setAttribute("title","TsimitakisDev");
        logoLogin.appendChild(imglogoLogin);

    }

    static verificarLogin = () =>{
        const mat = document.querySelector("#f_nomeusuario").value;
        const pas = document.querySelector("#f_senhausuario").value;

        const endpoint = `${this.config.endpoint}/?matricula=${mat}&senha=${pas}`;

        fetch(endpoint)
        .then(res => res.json())
        .then(res => {

            if(res){
                sessionStorage.setItem("logado","true");
                sessionStorage.setItem("matLogado",mat);
                sessionStorage.setItem("nomeLogado",res.nome);
                sessionStorage.setItem("acessoLogado",res.acesso);
                this.callback_Ok();
                this.fechar();
            }else{
                sessionStorage.setItem("logado","false");
                sessionStorage.setItem("matLogado","");
                sessionStorage.setItem("nomeLogado","");
                sessionStorage.setItem("acessoLogado","");
                this.callback_NaoOk();
                //alert("Login não efetuado! Nome ou Senha incorretos.");
            }
        })

    //     if(mat == "123" && pas =="321"){
    //         return true;
    //     }else{
    //         return false;
    //     }
    }

    static fechar = () => {
        const id_estilo = document.querySelector("#id_estilo")
        id_estilo.remove()

        const fundoLogin = document.querySelector("#fundoLogin")
        fundoLogin.remove()
    }

}
//export {Login};
