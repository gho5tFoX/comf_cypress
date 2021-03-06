// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })


Cypress.Commands.add('login', () => {
    const username = 'sort';
    const password = 'sort';

    cy.visit('/');
    cy.get('#username').type(username);
    cy.get('#password').type(password);
    cy.get('button[type="submit"]').click();
})

Cypress.Commands.add('uidRoute', (uid) => {
    cy.server();
    cy.route('PUT', '/api/suo/execute/CRM_ORDER_INITIALIZE_INDIVIDUAL').as(uid);
})

Cypress.Commands.add('verify', (h1) => {
    cy.contains('h1', h1).as('h1')
    cy.get('@h1').should('be.visible');
    cy.get('div > .alert-items').should('not.exist');
})