export default class RES_SUPPLIES {

    verify() {
        cy.verify('Dostawy');
        cy.get('.datagrid-table').should('be.visible');
    } 

}