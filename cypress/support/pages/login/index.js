import { el } from './elements'
import toast from '../../components/toast'
import alert from '../../components/alert'
class LoginPage {
    constructor() {
        this.toast = toast
        this.alert = alert
    }
    go() {
        cy.visit('/')
        cy.get(el.textCnpj)
            .get(el.textPassword)
            .should('be.visible')
        cy.contains(el.ortLog)
            .should('be.visible')
    }
    form(user) {
        cy.get(el.cnpj)
            .clear()
            .type(user.cnpj)
        cy.get(el.password)
            .clear()
            .type(user.password)
    }
    submit() {
        cy.get(el.eyes)
            .click()
        cy.contains(el.signIn)
            .click()
    }
    imagensLogin() {
        cy.get(el.imgPortal)
        .should('be.visible')
        cy.get(el.imgMarcas)
            .should('be.visible')
    }
    esqueciSenha() {
        cy.contains(el.forgetPassword)
            .should('be.visible')
            .click()
    }
}

export default new LoginPage()