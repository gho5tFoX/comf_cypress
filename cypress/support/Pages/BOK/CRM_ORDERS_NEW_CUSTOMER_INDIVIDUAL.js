export default class CRM_ORDERS_NEW_CUSTOMER_INDIVIDUAL {

    verify() {
        cy.verify('Zamówienia nowego klienta indywidualnego');
        cy.get('.datagrid-table').should('be.visible');
    } 

}