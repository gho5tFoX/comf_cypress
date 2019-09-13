export default class BOK_HOME_PAGE {

    verify() {
        cy.get('#search_box').should('be.visible');
        cy.get('button[type="submit"]').should('be.visible');
    } 

}