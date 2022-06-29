import { el } from './elements'

class forgetPassword {
    imagens() {
        cy.get(el.iconeCarta)
            .should('be.visible')
        cy.get(el.iconeWhatsapp)
            .should('be.visible')
    }
    ortografias() {
        cy.get(el.frase)
            .contains(el.textFrase)
        cy.get('p')
            .contains(el.email)
        cy.get('p')
            .contains(el.whatsapp)
    }
}

export default new forgetPassword()