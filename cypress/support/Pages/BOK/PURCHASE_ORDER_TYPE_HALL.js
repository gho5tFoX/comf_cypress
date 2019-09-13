class PURCHASE_ORDER_TYPE_HALL {

    verify() {
        cy.get('h1').contains('Przygotowanie zamówienia').should('be.visible');
        cy.get('button[title="Przejdź"]').should('be.visible');
    } 

}

export default PURCHASE_ORDER_TYPE_HALL;