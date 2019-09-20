export default class RES_RESOURCE_LOCATIONS {
    

    verify() {
        cy.verify('Urządzenia w lokalizacjach');
        cy.get('.datagrid-table').should('be.visible');
    } 

}