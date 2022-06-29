import { el } from './elements'
import footer from '../../components/footer'
import header from '../../components/header'
const time = { timeout: 7000 }

class dash {
    imagemCarrossel() { // primeira imagem do carrossel
        cy.get(el.imgNPC)
            .should('be.visible')
            .click()
        this.ultimasNovisdades()
        this.logoBeirario()
    }
    imagem1() { // imagem banner CAMILA QUEIROZ
        cy.get(el.imgBanner)
            .should('be.visible')
            .click()
        this.ultimasNovisdades()
        this.logoBeirario()
    }
    imagem2() { // imagem Podcast
        cy.get(el.imgPod)
            .should('be.visible')
            .click()
        this.ultimasNovisdades()
        this.logoBeirario()
    }
    imagem3() { // imagem Sicc
        cy.get(el.imgSicc)
            .should('be.visible')
            .click()
        this.ultimasNovisdades()
        this.logoBeirario()
    }
    imagem4() { // imagem Compra rápida
        cy.get(el.imgCR)
            .should('be.visible')
            .click()
        this.filterSelected()
        this.logoBeirario()
    }
    imagem5() { // imagem Compra programada
        cy.get(el.imgCP)
            .should('be.visible')
            .click()
        this.filterSelected()
        this.logoBeirario()
    }
    imagem6() { // imagem BR Post fácil
        cy.get(el.imgBRP)
            .should('be.visible')
            .click()
        this.ultimasNovisdades()
        this.logoBeirario()
    }
    imagem7() { // imagem Eu vendo modas
        cy.get(el.imgHrefEVM)
            .should('have.attr', 'target', '_blank')
        this.logoBeirario()
    }
    imagem8() { // imagem 2 via boletos
        cy.get(el.imgBoleto)
            .should('be.visible')
            .click()
        cy.get(el.cabecario)
            .should('have.text', 'nota fiscal e 2ª via boleto')
        this.logoBeirario()
    }
    imagem9() { // imagem Acompanhe seu pedido
        cy.get(el.imgPedidos)
            .should('be.visible')
            .click()
        cy.get(el.cabecario)
            .should('have.text', 'consulta de pedidos')
        this.logoBeirario()
    }
    logoBeirario() { // imagem do logo "Portal do Cliente"
        cy.get(el.imgLogo)
            .should('be.visible')
            .click()
    }
    ultimasNovisdades() {
        cy.contains(el.textUN)
            .should('be.visible')
    }
    filterSelected() {
        cy.get(el.filterSelected)
            .should('be.visible')
    }
}

export default new dash()