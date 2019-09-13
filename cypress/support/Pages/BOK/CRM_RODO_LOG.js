export default class CRM_RODO_LOG {

    verify() {
        cy.get('h1').contains('Historia ochrony danych osobowych').should('be.visible');
        cy.get('.datagrid-table').should('be.visible');
    } 

}