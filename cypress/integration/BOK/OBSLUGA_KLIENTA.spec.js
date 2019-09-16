import BOK_HOME_PAGE from '../../support/Pages/BOK/BOK_HOME_PAGE';
import NAVIGATION from '../../support/Pages/NAVIGATION';
import PURCHASE_ORDER_TYPE_HALL from '../../support/Pages/BOK/PURCHASE_ORDER_TYPE_HALL';
import NEW_IND_ORDER_HALL from '../../support/Pages/BOK/Zamowienie_nowej_umowy/NEW_IND_ORDER_HALL';
import CSO_ROOM_NEW_IND from '../../support/Pages/BOK/Zamowienie_nowej_umowy/Dla_nowego_klienta_indywidualnego/CSO_ROOM_NEW_IND';
import ADDRESS_ROOM_NEW_IND from '../../support/Pages/BOK/Zamowienie_nowej_umowy/Dla_nowego_klienta_indywidualnego/ADDRESS_ROOM_NEW_IND';

describe("Obsługa klienta: Nowa umowa - klient indywidualny", () => {

    const bokHomePage = new BOK_HOME_PAGE;
    const navigationPage = new NAVIGATION;
    const purchaseOrderTypeHallPage = new PURCHASE_ORDER_TYPE_HALL;
    const newIndOrderHallPage = new NEW_IND_ORDER_HALL;
    const csoRoomNewIndPage = new CSO_ROOM_NEW_IND;
    const addressRoomNewIndPage = new ADDRESS_ROOM_NEW_IND;

    beforeEach( () => {
        cy.login();

    })

    it("Smoke: Katalog produktów", () => {

        bokHomePage.verify();
        navigationPage.toogleTopMenu('BOK');
        navigationPage.sideMenuParent('Obsługa klienta','Zamówienie nowej umowy');
        purchaseOrderTypeHallPage.verify();
        purchaseOrderTypeHallPage.newOrder('Klient indywidualny').click();
        newIndOrderHallPage.verify();
        newIndOrderHallPage.room('BOK').click();
        csoRoomNewIndPage.verify();
        csoRoomNewIndPage.back().click();
        newIndOrderHallPage.verify();
        newIndOrderHallPage.room('Adres instalacji').click();
        addressRoomNewIndPage.verify();
        addressRoomNewIndPage.back().click();

    })

})
