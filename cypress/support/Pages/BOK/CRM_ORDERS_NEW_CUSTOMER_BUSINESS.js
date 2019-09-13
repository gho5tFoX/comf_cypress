class CRM_ORDERS_NEW_CUSTOMER_BUSINESS {

    verify() {
        cy.get('h1').contains('Zamówienia nowego klienta biznesowego').should('be.visible');
        cy.get('.datagrid-table').should('be.visible');
    } 

}

export default CRM_ORDERS_NEW_CUSTOMER_BUSINESS;