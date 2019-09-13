class TASK_ISSUES {

    verify() {
        cy.get('h1').contains('Zlecenia').should('be.visible');
        cy.get('.datagrid-table').should('be.visible');
    }

}

export default TASK_ISSUES;