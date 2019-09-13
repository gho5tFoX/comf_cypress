export default class CUSTOMERS_LIST {

    verify() {
        cy.get('h1').contains('Klienci').should('be.visible');
        cy.get('.datagrid-table').should('be.visible');
    } 

}