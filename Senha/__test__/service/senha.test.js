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
    test("Testa tamanho da senha (senha maior que o minimo)", () => {
        // Arrange
        const senha = new Senha({senha:constantes.SENHA_MAIOR_OU_IGUAL_8_CARACTERES});
    
        // Act
        const saida = SenhaService.ValidarTamanho(senha)
    
        // Assert
        expect(true).toBe(saida);
    });
    test("Testa se tem letra maiuscula na senha(não tem)", () => {
        // Arrange
        const senha = new Senha({senha:constantes.SENHA_MAIOR_OU_IGUAL_8_CARACTERES});
    
        // Act
        const saida = SenhaService.validarLetraMaiuscula(senha)
    
        // Assert
        expect(false).toBe(saida);
    });
    test("Testa se tem letra maiuscula na senha(tem)", () => {
        // Arrange
        const senha = new Senha({senha:constantes.SENHA_CORRETA});
    
        // Act
        const saida = SenhaService.validarLetraMaiuscula(senha)
    
        // Assert
        expect(true).toBe(saida);
    });
    test("Testa se tem letra minuscula na senha(não tem)", () => {
        // Arrange
        const senha = new Senha({senha:constantes.SENHA_MAIUSCULA});
    
        // Act
        const saida = SenhaService.validarLetraMinuscula(senha);
    
        // Assert
        expect(false).toBe(saida);
    });
    test("Testa se tem letra minuscula na senha(tem)", () => {
        // Arrange
        const senha = new Senha({senha:constantes.SENHA_CORRETA});
    
        // Act
        const saida = SenhaService.validarLetraMinuscula(senha);
    
        // Assert
        expect(true).toBe(saida);
    });
    
    test("Testa se tem caractere especial na senha(tem)", () => {
        // Arrange
        const senha = new Senha({senha:constantes.SENHA_MAIUSCULA});
    
        // Act
        const saida = SenhaService.validarCaractereEspecial(senha);
    
        // Assert
        expect(false).toBe(saida);
    });

    test("Testa se tem caractere especial na senha(não tem)", () => {
        // Arrange
        const senha = new Senha({senha:constantes.SENHA_CORRETA});
    
        // Act
        const saida = SenhaService.validarCaractereEspecial(senha);
    
        // Assert
        expect(true).toBe(saida);
    });

    test("Testa se tem espaço na senha(tem)", () => {
        // Arrange
        const senha = new Senha({senha:constantes.SENHA_ESPAÇO});
    
        // Act
        const saida = SenhaService.validarEspaço(senha);
    
        // Assert
        expect(true).toBe(saida);
    });
})
