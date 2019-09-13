export default class CRM_ORDER_MODIFICATION_HALL {

    verify() {
        cy.get('h1').contains('Zmiana stanu zamówienia').should('be.visible');
        cy.get('button[title="Przejdź"]').should('be.visible');
    } 

}