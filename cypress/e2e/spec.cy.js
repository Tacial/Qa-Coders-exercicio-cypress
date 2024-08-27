describe('template spec', () => {
  it('Acessar site', () => {
    cy.visit('https://automacao.qacoders-academy.com.br/login')
  })
  it('validando Texto Login', () => {
    cy.visit('https://automacao.qacoders-academy.com.br/login')
    cy.get("h3").should('be.visible')
    .and('have.text', 'Login')
  })
  it('Validar a url', () => {
    cy.visit('https://automacao.qacoders-academy.com.br/login')
    cy.url().should("eq", "https://automacao.qacoders-academy.com.br/login")
  })
  it('Validar o campo email', () => {
    cy.visit('https://automacao.qacoders-academy.com.br/login')
    cy.get("#email").should('be.visible')
  })
  it('Validar o campo password', () => {
    cy.visit('https://automacao.qacoders-academy.com.br/login')
    cy.get("#password").should('be.visible')
  })
})