export default class SUMMARY_ROOM_NEW_IND {

    verify() {

        cy.wait(1000)
        cy.get('h1').contains('Podsumowanie zamówienia').should('be.visible');

    } 

    back() {

        return cy.get('button').contains('Powrót');
    }

}