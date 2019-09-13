export default class RES_RESOURCE_LOCATIONS {
    

    verify() {
        cy.get('h1').contains('Urządzenia w lokalizacjach').should('be.visible');
        cy.get('.datagrid-table').should('be.visible');
    } 

}