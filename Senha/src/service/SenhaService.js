const { constantes } = require("../utils/constants");
class SenhaService{
    static ValidarTamanho(senha){
        if(senha.senha.length>=8) return true;
    }

    static validarLetraMaiuscula(senha){
        if(/[A-Z]/.test(senha.senha)) return true;
    }

    static validarLetraMinuscula(senha){
        if((/[a-z]/).test(senha.senha)) return true;
    }

    static validarCaractereEspecial(senha){
        if(/[^a-zA-Z0-9À-ÿ\s]/.test(senha.senha)) return true;
    }

    static validarEspaço(senha){
        if(/[ ]/.test(senha.senha)) return false;
    }

}
module.exports = {SenhaService};