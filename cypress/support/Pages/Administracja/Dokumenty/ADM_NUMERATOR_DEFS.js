export default class ADM_NUMERATOR_DEFS {

    verify() {
        cy.get('h1').contains('Numeratory').should('be.visible');
        cy.get('.datagrid-table').should('be.visible');
    } 

}