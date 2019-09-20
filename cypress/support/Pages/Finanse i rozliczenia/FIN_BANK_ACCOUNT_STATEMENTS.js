export default class FIN_BANK_ACCOUNT_STATEMENTS {

    verify() {
        cy.verify('Wyciągi bankowe');
        cy.get('.datagrid-table').should('be.visible');
    } 

}