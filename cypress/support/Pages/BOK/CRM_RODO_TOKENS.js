export default class CRM_RODO_TOKENS {

    verify() {
        cy.get('h1').contains('Klienci zanonimizowani').should('be.visible');
        cy.get('.datagrid-table').should('be.visible');
    } 

}