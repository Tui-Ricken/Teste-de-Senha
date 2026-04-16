const { constantes } = require("../utils/constants");
class SenhaService{
    static ValidarTamanho(senha){
        if(senha.senha.length>=8) return true;
    }
}
module.exports = {SenhaService};