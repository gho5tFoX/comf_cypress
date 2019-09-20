export default class CUSTOMERS_LIST {

    verify() {
        cy.verify('Klienci');
        cy.get('.datagrid-table').should('be.visible');
    } 

}