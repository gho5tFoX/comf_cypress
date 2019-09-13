export default class CAT_PRODUCTS {

    verify() {
        cy.get('h1').contains('Produkty').should('be.visible');
        cy.get('.datagrid-table').should('be.visible');
    } 

}