class FIN_INVOICE_MASS_PRINTS {

    verify() {
        cy.get('h1').contains('Procesy drukowania masowego').should('be.visible');
        cy.get('.datagrid-table').should('be.visible');
    } 

}

export default FIN_INVOICE_MASS_PRINTS;