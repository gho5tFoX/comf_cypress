class FIN_BANK_ACCOUNT_STATEMENTS {

    verify() {
        cy.get('h1').contains('Wyciągi bankowe').should('be.visible');
        cy.get('.datagrid-table').should('be.visible');
    } 

}

export default FIN_BANK_ACCOUNT_STATEMENTS;