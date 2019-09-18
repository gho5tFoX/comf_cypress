export default class ADDRESS_ROOM_NEW_IND {

    verify() {

        cy.wait(1000)
        cy.get('h1').contains('Wybierz adres instalacji dla zamówienia').should('be.visible');

    } 

    addressSearch(adres) {

        cy.get('input[type="text"]').type(adres);
        cy.get('div[role="option"]').contains(adres).click();
        
    }

    next() {

        return cy.get('button').contains('Dalej');
    }

    back() {

        return cy.get('button').contains('Wróć');
    }

}