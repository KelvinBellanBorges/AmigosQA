
import { el } from './elements'

class Alert {
    haveText(expectedText) {
        cy.contains(el.error, expectedText)
            .should('be.visible')
    }
    loginTextError(expectedLoginText){
        cy.contains(el.message, expectedLoginText)
            .should('be.visible')
    }
}

export default new Alert()