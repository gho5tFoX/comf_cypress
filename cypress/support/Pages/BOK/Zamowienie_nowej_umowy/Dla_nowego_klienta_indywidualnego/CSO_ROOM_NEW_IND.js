export default class CSO_ROOM_NEW_IND {

    verify() {

        cy.wait(1000)
        cy.get('h1').contains('Wybierz biuro obsługi klienta dla zamówienia').should('be.visible');

    } 

    next() {

        return cy.get('button').contains('Dalej');
    }

    back() {

        return cy.get('button').contains('Wróć');
    }

}