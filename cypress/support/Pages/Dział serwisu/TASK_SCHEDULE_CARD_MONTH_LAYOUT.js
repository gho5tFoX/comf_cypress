export default class TASK_SCHEDULE_CARD_MONTH_LAYOUT {

    verify() {
        cy.get('h1').contains('Konfiguracja harmonogramu techników').should('be.visible');
        cy.get('button').contains('Kopiuj karty').should('be.visible');
    }

}