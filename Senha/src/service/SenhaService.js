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
}
module.exports = {SenhaService};