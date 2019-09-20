export default class CSO_ROOM_NEW_IND {

    verify() {
        cy.verify('Wybierz biuro obsługi klienta dla zamówienia');
    } 

    next() {
        cy.get('button').contains('Dalej').click();
    }

    back() {
        cy.get('button').contains('Wróć').click();
    }

}