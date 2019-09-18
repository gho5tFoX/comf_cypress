

export default class OFFERS_ROOM_NEW_IND {

    dataTransfer = new DataTransfer;

    verify() {

        cy.wait(1000)
        cy.get('h1').contains('Wybierz oferty dla zamówienia').should('be.visible');

    } 


    drag() {

        // cy.wait(3000);

        cy.contains('.custom-alert-item', 'Hot start dla nowych').as('drag')
        cy.get('div').contains('Przeciągnij wybrane oferty tutaj').as('drop');
        
        cy.get('@drag').drag('@drop');
        

        // const dataTransfer = new DataTransfer;

        // cy.get('.custom-alert-item').contains('Hot start dla nowych').first().as('drag')
        // cy.wait(3000)
        
        // cy.get('@drag').trigger('dragstart', { dataTransfer });

        // cy.get('div').contains('Przeciągnij wybrane oferty tutaj').trigger('drop', {dataTransfer})


        // .trigger('mousemove', { clientX: 1541, clientY: 343, pageX: 1541, pageY: 343, bubbles: false, cancelable: false }).trigger('mouseup');
        // cy.get('div').contains('Przeciągnij wybrane oferty tutaj').should('be.visible').trigger('mousemove').trigger('mouseup');

        // cy.wait(2000)
        // cy.get('@drag')
        // .trigger('mousedown', { which: 1 })
        //   .trigger('mousemove', { clientX: 1480, clientY: 345, pageX: 1480, pageY: 345})
        //   .trigger('mouseup', {force: true})
    }

        // cy.get('div').contains('Przeciągnij wybrane oferty tutaj').trigger('drop')

        // const dragAndDrop = (fromElement, toElement, location = 'bottomRight') => {
        //     cy
        //       .get(fromElement)
        //       .should('be.visible')
        //       .first()
        //       .trigger('mousedown', { which: 1 });
        //     cy.get(toElement)
        //       .should('be.visible')
        //       .trigger('mousemove', location)
        //       .trigger('mouseup');
        //   };
    

    movePiece () {
        cy.get('div .draggable').contains('Hot start dla nowych')
          .trigger('mousedown', { which: 1 })
          .trigger('mousemove', { clientX: 1480, clientY: 345, pageX: 1480, pageY: 345})
          .trigger('mouseup', {force: true})
    }

    end() {

        return cy.get('button').contains('Zakończ wybieranie ofert');
    }

}