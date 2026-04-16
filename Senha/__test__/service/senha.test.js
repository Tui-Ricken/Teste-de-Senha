const {Senha} = require("../../src/model/Senha");
const {SenhaService} = require("../../src/service/SenhaService");
// const casos = require("../service/dados/senha.json");
const {constantes} = require("../../src/utils/constants");

describe("Senha",()=>{
    test("Testa tamanho da senha (senha menor que o minimo)", () => {
        // Arrange
        const senha = new Senha({senha:constantes.SENHA_MENOR_8_CARACTERES});

        // Act
        const saida = SenhaService.ValidarTamanho(senha)

        // Assert
        expect(false).toBe(saida);
    });
})
