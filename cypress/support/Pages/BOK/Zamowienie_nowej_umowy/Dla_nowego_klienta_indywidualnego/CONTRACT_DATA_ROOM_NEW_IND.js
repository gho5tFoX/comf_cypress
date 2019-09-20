export default class CONTRACT_DATA_ROOM_NEW_IND {

    verify() {
        cy.verify('Wprowadź dane umowy dla zamówienia');

    } 

    next() {
        cy.get('button').contains('Dalej').click();
    }

    back() {
        cy.get('button').contains('Wróć').click();
    }

}