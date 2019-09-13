export default class FIN_INVOICES {

    verify() {
        cy.get('h1').contains('Lista dokumentów sprzedażowych').should('be.visible');
        cy.get('.datagrid-table').should('be.visible');
    } 

}