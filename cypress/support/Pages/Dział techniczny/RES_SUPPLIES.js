export default class RES_SUPPLIES {

    verify() {
        cy.get('h1').contains('Dostawy').should('be.visible');
        cy.get('.datagrid-table').should('be.visible');
    } 

}