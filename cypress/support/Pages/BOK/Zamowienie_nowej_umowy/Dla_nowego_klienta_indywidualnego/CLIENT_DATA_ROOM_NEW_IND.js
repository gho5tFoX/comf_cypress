export default class CLIENT_DATA_ROOM_NEW_IND {

    verify() {

        cy.wait(1000)
        cy.get('h1').contains('Wprowadź dane klienta dla zamówienia').should('be.visible');

    } 

    next() {

        return cy.get('button').contains('Dalej');
    }

    back() {

        return cy.get('button').contains('Wróć');
    }

}