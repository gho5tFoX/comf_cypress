export default class HMDL_GROUPS {

    verify() {
        cy.get('h1').contains('Grupy').should('be.visible');
        cy.get('.datagrid-table').should('be.visible');
    } 

}