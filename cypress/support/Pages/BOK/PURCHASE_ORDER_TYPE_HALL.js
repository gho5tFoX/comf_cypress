export default class PURCHASE_ORDER_TYPE_HALL {

    verify() {
        cy.get('h1').contains('Przygotowanie zamówienia').should('be.visible');
        cy.get('button[title="Przejdź"]').should('be.visible');
    } 

    newOrder(client) {
        return cy.contains(`c-display-text`, `${client}`).next('.c-sdd-process-action')
    }

}