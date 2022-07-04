//verificação dos componentes
//verificação das imagens/gifs
//ortografia
import header from '../../support/components/header'
import loginPage from '../../support/pages/login'
import lojaVirtual from '../../support/pages/lojaVirtual'

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
        it('verificando dos componentes da loja', () => {
            cy.wait(7000)
            for (var i = 1; i < 12; i++) {
                cy.get(`:nth-child(${i}) > .sc-hsOonA`)
                    .should('be.visible')
                    .click()
                lojaVirtual.precos()
                lojaVirtual.produto()
                for (var j = 1; j <= 2; j++) {
                    for (var k = 1; k <= 11; k++) {
                        if (k == 7) {
                            lojaVirtual.Ref_Cab() // checkin para ver se a empresa está funcionando
                        }
                        if (k <= 10) {
                            cy.get(`:nth-child(${j}) > :nth-child(${k}) > strong`)
                                .should('be.visible')
                        }
                        else {
                            cy.get(`:nth-child(2) > :nth-child(11) > strong`)
                                .should('be.visible')
                        }
                    }
                }
                header.lojaVirtual()
            }
        })
    })
})
