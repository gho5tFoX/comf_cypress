export default class CAT_SERVICES {

    verify() {
        cy.get('h1').contains('Usługi').should('be.visible');
        cy.get('.datagrid-table').should('be.visible');
    } 

}