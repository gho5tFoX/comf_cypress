class CRM_ORDER_RESERVATIONS {

    verify() {
        cy.get('h1').contains('Rezerwacje zasobów').should('be.visible');
        cy.get('.datagrid-table').should('be.visible');
    } 

}

export default CRM_ORDER_RESERVATIONS;