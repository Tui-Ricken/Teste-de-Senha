const { constantes } = require("../utils/constants");
class SenhaService{
    static ValidarTamanho(senha){
        return senha.senha.length >= 8;
    }

    static validarLetraMaiuscula(senha){
        return /[A-Z]/.test(senha.senha);
    }

    static validarLetraMinuscula(senha){
        return /[a-z]/.test(senha.senha);
    }

    static validarCaractereEspecial(senha){
        return /[^a-zA-Z0-9À-ÿ\s]/.test(senha.senha);
    }

    static validarEspaco(senha){
        return !/\s/.test(senha.senha);
    }

    static validarSenha(senha){
        return this.ValidarTamanho(senha)
            && this.validarLetraMaiuscula(senha)
            && this.validarLetraMinuscula(senha)
            && this.validarCaractereEspecial(senha)
            && this.validarEspaco(senha);
    }

    static validarSenhaComErros(senha){
        const erros = [];

        if(!this.ValidarTamanho(senha)) erros.push("A senha precisa ter pelo menos 8 caracteres");
        if(!this.validarLetraMaiuscula(senha)) erros.push("A senha precisa ter ao menos 1 letra maiúscula");
        if(!this.validarLetraMinuscula(senha)) erros.push("A senha precisa ter ao menos 1 letra minúscula");
        if(!this.validarCaractereEspecial(senha)) erros.push("A senha precisa ter ao menos 1 caractere especial (@!#$...)");
        if(!this.validarEspaco(senha)) erros.push("A senha não pode conter espaços");

        return {
            valida: erros.length === 0,
            erros
        };
    }

}
module.exports = {SenhaService};