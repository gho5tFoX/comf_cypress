export default class ADDRESS_ROOM_NEW_IND {

    verify() {
        cy.verify('Wybierz adres instalacji dla zamówienia');
    } 

    addressSearch(adres) {
        cy.get('input[type="text"]').type(adres);
        cy.get('div[role="option"]').contains(adres).click();
        cy.wait(1000);
    }

    next() {
        cy.get('button').contains('Dalej').click();
    }

    back() {
        cy.get('button').contains('Wróć').click();
    }

}