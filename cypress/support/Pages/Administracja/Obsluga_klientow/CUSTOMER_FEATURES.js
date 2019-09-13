export default class CUSTOMER_FEATURES {

    verify() {
        cy.get('h1').contains('Znaczniki').should('be.visible');
        cy.get('.datagrid-table').should('be.visible');
    } 

}