export default class CLIENT_DATA_ROOM_NEW_IND {

    verify() {
        cy.verify('Wprowadź dane klienta dla zamówienia');
    } 

    next() {
        cy.get('button').contains('Dalej').click();
    }

    back() {
        cy.get('button').contains('Wróć').click();
    }

    profilSprzedazy(profil) {
        cy.get('select[name="salesProfile"]').select(profil);
    }

    imie(_imie) {
        cy.get('#forename').type(_imie);
    }

    nazwisko(_nazwisko) {
        cy.get('#surname').type(_nazwisko);
    }

    pesel(_pesel) {
        cy.get('#pin').type(_pesel);
    }
    
    

}