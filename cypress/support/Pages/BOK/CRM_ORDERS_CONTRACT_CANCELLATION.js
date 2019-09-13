class CRM_ORDERS_CONTRACT_CANCELLATION {

    verify() {
        cy.get('h1').contains('Zamówienia rozwiązania umowy').should('be.visible');
        cy.get('.datagrid-table').should('be.visible');
    } 

}

export default CRM_ORDERS_CONTRACT_CANCELLATION;