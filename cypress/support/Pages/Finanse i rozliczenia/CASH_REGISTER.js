class CASH_REGISTER {

    verify() {
        cy.get('h1').contains('Kasa').should('be.visible');
        cy.get('div').contains('Wybierz kasę').should('be.visible');
    } 

}

export default CASH_REGISTER;