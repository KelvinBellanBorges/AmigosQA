import loginPage from '../support/pages/login'
import header from '../support/components/header'

describe('login', () => {
    const user = {
        nome: 'MEIRELES MODAS LTDA ME',
        cnpj: '03.504.501/0001-01',
        password: 'Beirario2022@'
    }
    beforeEach(() => {
        loginPage.go()
    })

    context('SENHA invalida', function () {
        it('SENHA está errado', () => {

            user.password = 'errei de proposito'
            loginPage.form(user)
            loginPage.submit()
            // verifica se a ortografia do erro está correta
            loginPage.alert.loginTextError('CNPJ ou senha inválida. Tente novamente.')
        })
    })
    context('CNPJ invalido', () => {
        it('Cnpj está errado', () => {

            user.cnpj = '99.999.999/9999-99'
            loginPage.form(user)
            loginPage.submit()
            // verifica se a ortografia do erro está correta
            loginPage.alert.loginTextError('CNPJ ou senha inválida. Tente novamente.')
        })
    })
    context.only('Tela de Login', () => {
        it('verificar todos componentes e ortografia da pagina de login', () => {
            loginPage.imagensLogin()
            loginPage.form(user)
            loginPage.submit()
        })
        it('Login efetuado com sucesso', () => {

            loginPage.form(user)
            loginPage.submit()
            cy.wait(7000)
            // Comando verifica se a variavel "nome" está correta ao fazer login
            header.localFaturamento(user)
        })
    })
})