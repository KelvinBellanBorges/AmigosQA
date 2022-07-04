import { el } from './elements'
class lojaVirtual {

    produto() {
        cy.get(el.codProdutoCab).invoke('text').then(($codProdutoCab) => {
            cy.log($codProdutoCab)
        })
        cy.get(el.codProduto).invoke('text').then(($codProduto) => {
            cy.log($codProduto)
        })
        //expected($codProdutoCab).to.eq($codProduto)
        cy.get(el.fichaTec)
            .should('have.text', 'Ficha Técnica')
            .click()
    }
    Ref_Cab() {
        var ref = el.nomeREF_pro
        var cab = el.nomeCAB_pro
        cy.get(ref).invoke('text').then(($nomeREF) => {
            var x = $nomeREF.substring(12) // ignorar o "Referência"
            cy.log($nomeREF)
            cy.get(cab).invoke('text').then(($nomeCAB) => {
                var y = $nomeCAB.substring(8) // ignorar o "Cabedal"
                cy.log($nomeCAB)
                cy.get(el.nomeDESC).invoke('text').then(($DESC) => {
                    cy.log($DESC)
                    expect(x + ' ' + y).to.eq($DESC)
                })
            })
        })
    }
    ComponentesFichaTec(expectedText) {
        cy.contains(el.compFichaTec, expectedText)
            .should('be.visible')
    }
    precos() {
        cy.get(el.precoProduto)
            .should('be.visible')
        cy.get(el.valorProduto).invoke('text').then(($valorProduto) => {
            cy.log($valorProduto)
        })

        cy.get(el.sugestaoPreco)
            .should('be.visible')
        cy.get(el.valorSugestao).invoke('text').then(($valorSugestao) => {
            cy.log($valorSugestao)
        })

    }
}
export default new lojaVirtual()