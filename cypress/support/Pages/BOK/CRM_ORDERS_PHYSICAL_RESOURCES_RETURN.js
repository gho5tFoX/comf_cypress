export default class CRM_ORDERS_PHYSICAL_RESOURCES_RETURN {

    verify() {
        cy.get('h1').contains('Zamówienia zwrotu urządzeń').should('be.visible');
        cy.get('.datagrid-table').should('be.visible');
    } 

}