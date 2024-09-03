// <reference types="cypress" />

describe('Login', () => {
  beforeEach(() => {
    cy.visit('/login')
  });
  it('validando Texto Login', () => {
    cy.get("h3").should('be.visible')
    .and('have.text', 'Login')
  })
  it('Validar a url', () => {
    cy.url().should("eq", `${Cypress.config("baseUrl")}/login`)
  })
  it('Validar o campo email', () => {
    cy.get("#email").should('be.visible')
  })
  it('Validar o campo password', () => {
    cy.get("#password").should('be.visible')
  })
})