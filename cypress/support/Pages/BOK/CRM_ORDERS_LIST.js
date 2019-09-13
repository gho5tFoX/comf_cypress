class CRM_ORDERS_LIST {

    verify() {
        cy.get('h1').contains('Lista zamówień').should('be.visible');
        cy.get('.datagrid-table').should('be.visible');
    } 

}

export default CRM_ORDERS_LIST;