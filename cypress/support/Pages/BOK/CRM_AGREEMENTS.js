export default class CRM_AGREEMENTS {

    verify() {
        cy.get('h1').contains('Lista umów').should('be.visible');
        cy.get('.datagrid-table').should('be.visible');
    } 

}