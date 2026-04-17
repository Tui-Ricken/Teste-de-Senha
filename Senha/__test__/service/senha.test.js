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
        const saida = SenhaService.validarEspaco(senha);
    
        // Assert
        expect(false).toBe(saida);
    });
    
    test("Testa se tem espaço na senha(não tem)", () => {
        // Arrange
        const senha = new Senha({senha:constantes.SENHA_CORRETA});
    
        // Act
        const saida = SenhaService.validarEspaco(senha);
    
        // Assert
        expect(true).toBe(saida);
    });

    test("Retorna erros por regra quando senha é inválida", () => {
            // Arrange
            const senha = new Senha({senha:"abc"});

            // Act
            const saida = SenhaService.validarSenhaComErros(senha);

            // Assert
            expect(saida.valida).toBe(false);
            expect(saida.erros).toContain("A senha precisa ter pelo menos 8 caracteres");
            expect(saida.erros).toContain("A senha precisa ter ao menos 1 letra maiúscula");
            expect(saida.erros).toContain("A senha precisa ter ao menos 1 caractere especial (@!#$...)");
        });

        test("Retorna sem erros quando senha é válida", () => {
            // Arrange
            const senha = new Senha({senha:constantes.SENHA_CORRETA});

            // Act
            const saida = SenhaService.validarSenhaComErros(senha);

            // Assert
            expect(saida.valida).toBe(true);
            expect(saida.erros).toEqual([]);
        });

})
