export default class NAVIGATION {

    toogleTopMenu(header) {
        cy.get('.ng-star-inserted').contains(header)
        .then($toogle => {
            if ($toogle.hasClass('nav-link nav-text ng-star-inserted active')) {

            }
            else {
                cy.get('.ng-star-inserted').contains(header).click();
            }
        })
    }    

    sideMenuParent(parent, child) {
        cy.get('.sidenav label').contains(parent).click();
        cy.get(`a[title="${child}"]`).click();
        }

    sideMenuParentOnly(parent) {
        cy.get('.sidenav label').contains(parent).click();
        }

    sideMenuChild(child) {
        cy.get(`a[title="${child}"]`).click();
        // (($ele)=> {
        //     if ($ele.text().trim() === child) {
        //       cy.wrap($ele).click();
        //     }
        // })
    }
}