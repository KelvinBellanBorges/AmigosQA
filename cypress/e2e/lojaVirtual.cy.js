//verificação dos componentes
//verificação das imagens/gifs
//ortografia
import header from '../support/components/header'
import loginPage from '../support/pages/login'
import { el } from '../support/pages/lojaVirtual/elements'

describe('Loja Virtual', () => {
    const time = {
        timeout: 7000
    }
    const user = {
        nome: 'MEIRELES MODAS LTDA ME',
        cnpj: '03.504.501/0001-01',
        password: 'Beirario2022@'
    }
    beforeEach(() => {
        loginPage.go()
        loginPage.form(user)
        loginPage.submit()
        header.lojaVirtual()
    })
    context('Produtos', () => {
        it('verificando todos campos da loja', () => {
            cy.wait(10000)
            for (var i = 1; i < 12; i++) {
                cy.get(`:nth-child(${i}) > .sc-hsOonA`)
                    .should('be.visible')
                    .click()
                cy.get(el.fichaTec)
                    .should('have.text','Ficha Técnica')
                header.lojaVirtual()
            }
        })
    })
})