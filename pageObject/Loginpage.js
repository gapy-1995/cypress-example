/// <reference types="cypress" />

class LoginPage extends BasePage {
    loginWithValidUser() {
        cy.fixture('credentials').as('validUser')
        cy.visit('https://www.saucedemo.com/')
        cy.get('input[data-test=username]').type(this.validUser.userName)
        cy.get('input[data-test=password]').type(this.validUser.password)
        cy.get('input[type=submit]').click()
        cy.get('.title').should('contain', 'Products')
    }
}