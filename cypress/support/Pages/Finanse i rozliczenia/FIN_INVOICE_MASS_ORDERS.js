class FIN_INVOICE_MASS_ORDERS {

    verify() {
        cy.get('h1').contains('Procesy fakturowania masowego').should('be.visible');
        cy.get('.datagrid-table').should('be.visible');
    } 

}

export default FIN_INVOICE_MASS_ORDERS;