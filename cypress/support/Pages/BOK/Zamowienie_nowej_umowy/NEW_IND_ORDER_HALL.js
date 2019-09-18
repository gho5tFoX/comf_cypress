export default class NEW_IND_ORDER_HALL {

    verify() {
        cy.wait(1000)
        cy.get('h1').contains('dla nowego klienta indywidualnego').should('be.visible');
    }

    room(_room) {
        return cy.contains(`c-display-text`, `${_room}`).next('.c-sdd-process-action')
    }

}