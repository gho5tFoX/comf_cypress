export default class REP_REPORTS {

    verify() {
        cy.get('h1').contains('Raporty').should('be.visible');
        cy.get('.datagrid-table').should('be.visible');
    } 

}