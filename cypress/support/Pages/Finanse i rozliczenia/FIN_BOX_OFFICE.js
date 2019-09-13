export default class FIN_BOX_OFFICE {

    verify() {
        cy.get('h1').contains('Raporty kasowe').should('be.visible');
        cy.get('.datagrid-table').should('be.visible');
    } 

}