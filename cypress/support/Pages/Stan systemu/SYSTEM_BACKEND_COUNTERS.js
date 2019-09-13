class SYSTEM_BACKEND_COUNTERS {

    verify() {
        cy.get('h1').contains('Statystyki pracy systemu').should('be.visible');
        cy.get('div').contains('Liczniki serwera').should('be.visible');
    } 

}

export default SYSTEM_BACKEND_COUNTERS;