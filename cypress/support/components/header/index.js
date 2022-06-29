import { el } from './elements'
const time = {
    timeout: 7000
}
class Header {
    constructor() {
        this.Header = Header
    }
    carrinho() {
        cy.get(el.carrinho)
            .should('be.visible')
            .click()
        cy.contains(el.veriCart)
            .should('be.visible', time)
    }
    favovito() {
        cy.get(el.favoritos)
            .should('be.visible')
            .click()
        cy.contains(el.veriFav)
            .should('be.visible', time)
    }
    trocarSenha() {
        cy.get(el.trocarSenha)
            .should('be.visible')
            .click()
        cy.contains(el.veriTrocaSen)
            .should('be.visible', time)
    }
    lojaVirtual() {
        cy.get(el.lojaVirtual)
            .click({ multiple: true, force: true })
            .should('be.visible')
    }
    meAjuda() {
        cy.get(el.meAjuda)
            .should('be.visible')
            .click()
        cy.contains(el.veriMeAjuda)
            .should('be.visible', time)
    }
    servicos() {
        cy.get(el.servicos)
            .should('be.visible')
    }
    exit() {
        cy.get(el.exit)
            .should('be.visible')
            .click()
        cy.contains(el.veriExit)
            .should('be.visible', time)
    }
    localFaturamento(user) {
        cy.wait(7000)
        cy.get('div', time)
            .contains(user.nome)
    }
}

export default new Header()