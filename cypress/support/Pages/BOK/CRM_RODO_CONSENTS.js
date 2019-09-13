class CRM_RODO_CONSENTS {

    verify() {
        cy.get('h1').contains('Statusy klientów').should('be.visible');
        cy.get('.datagrid-table').should('be.visible');
    } 

}

export default CRM_RODO_CONSENTS;