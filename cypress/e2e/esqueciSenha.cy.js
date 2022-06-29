//verificação dos componentes
//verificação das imagens/gifs
//ortografia

import forgetPassword from '../support/pages/forgetPassword'
import loginPage from '../support/pages/login'

describe('Esqueci a minha senha', () => {
    const time = {
        timeout: 7000
    }
    before(() => {
        loginPage.go()
        loginPage.esqueciSenha()
    })
    context('verificação das imagens e icones', () => {
        it('todas imagens e icones', () => {
            forgetPassword.imagens()
        })
    })
    context('verificação da ortografia', () => {
        it('verificação da frase', () => {
            forgetPassword.ortografias()
        })
    })
})