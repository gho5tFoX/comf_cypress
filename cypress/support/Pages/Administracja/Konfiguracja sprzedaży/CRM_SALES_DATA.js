class CRM_SALES_DATA {

    verify() {
        cy.get('h1').contains('Dane sprzedawcy do faktury').should('be.visible');
        cy.get('.datagrid-table').should('be.visible');
    } 

}

export default CRM_SALES_DATA;