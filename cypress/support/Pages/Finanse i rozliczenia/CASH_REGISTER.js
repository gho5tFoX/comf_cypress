export default class CASH_REGISTER {

    verify() {
        cy.verify('Kasa');
        cy.get('div').contains('Wybierz kasę').should('be.visible');
    } 

}