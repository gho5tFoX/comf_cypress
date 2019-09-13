class S2E_EVENTS {

    verify() {
        cy.get('h1').contains('Zdarzenia').should('be.visible');
        cy.get('.datagrid-table').should('be.visible');
    } 

}

export default S2E_EVENTS;