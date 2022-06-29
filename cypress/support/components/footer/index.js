import { lj, sv, md } from './elements'

class footer {

    lojaVirtual() {
        cy.get(lj.lojaVirtual)
            .should('be.visible')
            .contains('Loja virtual')
        cy.get('.footerItem')
            .should('be.visible')
            .contains(lj.maisVendido)
        cy.get('a')
            .should('be.visible')
            .contains(lj.oportunidade)
    }
    Serviços() {
        cy.get('a')
            .should('be.visible')
            .contains(sv.servicos)
        cy.get('a')
            .should('be.visible')
            .contains(sv.consulta)
        cy.get('a')
            .should('be.visible')
            .contains(sv.nf)
        cy.get('a')
            .should('be.visible')
            .contains(sv.catalogo)
        cy.get('a')
            .should('be.visible')
            .contains(sv.materias)
        cy.get('a')
            .should('be.visible')
            .contains(sv.shoowRoom)
    }
    midias() {
        cy.get('div')
            .should('be.visible')
            .contains(md.midiaSocial)
        cy.get(md.iconFacebook)
            .should('be.visible')
        cy.get(md.iconLinkedin)
            .should('be.visible')
        cy.get(md.iconInstagram)
            .should('be.visible')
        cy.get(md.iconYoutube)
            .should('be.visible')
    }
}

export default new footer()