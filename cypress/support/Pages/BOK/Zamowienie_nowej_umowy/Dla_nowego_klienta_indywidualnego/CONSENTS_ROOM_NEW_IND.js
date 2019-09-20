export default class CONSENTS_ROOM_NEW_IND {

    verify() {
        cy.verify('Wybierz oświadczenia dla zamówienia');
    } 

    next() {
        cy.get('button').contains('Dalej').click();
    }

    back() {
        cy.get('button').contains('Wróć').click();
    }

    sposobPozyskania(sposob) {
        cy.get('select[name="ACQUISITION"]').select(sposob);
    }

    zgodaNaEfakture() {
        cy.get('input[name="CONSENT__EFAKTURA"]').check({force: true});
    }

}