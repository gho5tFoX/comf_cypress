class CRM_ORDERS_NEW_CUSTOMER_INDIVIDUAL {

    verify() {
        cy.get('h1').contains('Zamówienia nowego klienta indywidualnego').should('be.visible');
        cy.get('.datagrid-table').should('be.visible');
    } 

}

export default CRM_ORDERS_NEW_CUSTOMER_INDIVIDUAL;