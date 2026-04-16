const { constantes } = require("../utils/constants");
class SenhaService{
    static ValidarTamanho(senha){
        if(senha.length()<8) return false;
    }
}
module.exports = {SenhaService};