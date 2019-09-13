export default class TASK_SCHEDULE_CARD_MONTH_TIMETABLE {

    verify() {
        cy.get('h1').contains('Planowanie harmonogramu techników').should('be.visible');
        cy.get('button').contains('Drukuj dzień').should('be.visible');
    }

}