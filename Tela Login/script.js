import { Login } from "./login.js";
import { Mensagem } from "../CaixaMensagem/mensagem.js";

const callback_Ok = () =>{

}

const callback_NaoOk = () =>{
    const config = {
        cor: "rgb(131, 2, 2)",
        tipo: "ok"
        
    }
    Mensagem.mostrar(config, "Erro", "Login não efetuado! <br> Usuário ou senha incorretos.")
}

Login.login(callback_Ok, callback_NaoOk);

