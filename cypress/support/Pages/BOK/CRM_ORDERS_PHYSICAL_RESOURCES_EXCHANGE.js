export default class CRM_ORDERS_PHYSICAL_RESOURCES_EXCHANGE {

    verify() {
        cy.get('h1').contains('Zamówienia wymiany urządzeń').should('be.visible');
        cy.get('.datagrid-table').should('be.visible');
    } 

}