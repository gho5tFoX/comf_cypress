import BOK_HOME_PAGE from '../../support/Pages/BOK/BOK_HOME_PAGE';
import NAVIGATION from '../../support/Pages/NAVIGATION';
import PURCHASE_ORDER_TYPE_HALL from '../../support/Pages/BOK/PURCHASE_ORDER_TYPE_HALL';
import NEW_IND_ORDER_HALL from '../../support/Pages/BOK/Zamowienie_nowej_umowy/NEW_IND_ORDER_HALL';
import CSO_ROOM_NEW_IND from '../../support/Pages/BOK/Zamowienie_nowej_umowy/Dla_nowego_klienta_indywidualnego/CSO_ROOM_NEW_IND';
import ADDRESS_ROOM_NEW_IND from '../../support/Pages/BOK/Zamowienie_nowej_umowy/Dla_nowego_klienta_indywidualnego/ADDRESS_ROOM_NEW_IND';
import OFFERS_ROOM_NEW_IND from '../../support/Pages/BOK/Zamowienie_nowej_umowy/Dla_nowego_klienta_indywidualnego/OFFERS_ROOM_NEW_IND';
import CRM_ISSUE_DATA_ROOM_NEW_IND from '../../support/Pages/BOK/Zamowienie_nowej_umowy/Dla_nowego_klienta_indywidualnego/CRM_ISSUE_DATA_ROOM_NEW_IND';
import CONSENTS_ROOM_NEW_IND from '../../support/Pages/BOK/Zamowienie_nowej_umowy/Dla_nowego_klienta_indywidualnego/CONSENTS_ROOM_NEW_IND';
import CLIENT_DATA_ROOM_NEW_IND from '../../support/Pages/BOK/Zamowienie_nowej_umowy/Dla_nowego_klienta_indywidualnego/CLIENT_DATA_ROOM_NEW_IND';
import CONTRACT_DATA_ROOM_NEW_IND from '../../support/Pages/BOK/Zamowienie_nowej_umowy/Dla_nowego_klienta_indywidualnego/CONTRACT_DATA_ROOM_NEW_IND';
import SUMMARY_ROOM_NEW_IND from '../../support/Pages/BOK/Zamowienie_nowej_umowy/Dla_nowego_klienta_indywidualnego/SUMMARY_ROOM_NEW_IND';

describe("Obsługa klienta: Nowa umowa - klient indywidualny", () => {

    const bokHomePage = new BOK_HOME_PAGE;
    const navigationPage = new NAVIGATION;
    const purchaseOrderTypeHallPage = new PURCHASE_ORDER_TYPE_HALL;
    const newIndOrderHallPage = new NEW_IND_ORDER_HALL;
    const csoRoomNewIndPage = new CSO_ROOM_NEW_IND;
    const addressRoomNewIndPage = new ADDRESS_ROOM_NEW_IND;
    const offersRoomNewIndPage = new OFFERS_ROOM_NEW_IND;
    const crmIssueDataRoomNewIndPage = new CRM_ISSUE_DATA_ROOM_NEW_IND;
    const consentRoomNewIndPage = new CONSENTS_ROOM_NEW_IND;
    const clientDataRoomNewIndPage = new CLIENT_DATA_ROOM_NEW_IND;
    const contractDataRoomNewIndPage = new CONTRACT_DATA_ROOM_NEW_IND;
    const summaryRoomNewIndPage = new SUMMARY_ROOM_NEW_IND;

    beforeEach( () => {
        cy.login();

    })

    it("Smoke: Nowa umowa - klient indywidualny", () => {

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
        newIndOrderHallPage.verify();
        newIndOrderHallPage.room('Oferty').click()
        offersRoomNewIndPage.verify();
        offersRoomNewIndPage.end().click();
        newIndOrderHallPage.verify();
        newIndOrderHallPage.room('Zlecenie').click()
        crmIssueDataRoomNewIndPage.verify();
        crmIssueDataRoomNewIndPage.back().click();
        newIndOrderHallPage.verify();
        newIndOrderHallPage.room('Oświadczenia').click()
        consentRoomNewIndPage.verify();
        consentRoomNewIndPage.back().click();
        newIndOrderHallPage.verify();
        newIndOrderHallPage.room('Dane klienta').click();
        clientDataRoomNewIndPage.verify();
        clientDataRoomNewIndPage.back().click();
        newIndOrderHallPage.verify();
        newIndOrderHallPage.room('Dane umowy').click();
        contractDataRoomNewIndPage.verify();
        contractDataRoomNewIndPage.back().click();
        newIndOrderHallPage.verify();
        newIndOrderHallPage.room('Podsumowanie').click();
        summaryRoomNewIndPage.verify();
        summaryRoomNewIndPage.back().click();
        newIndOrderHallPage.verify();

    })

    it.only("Nowa umowa - klient indywidualny", () => {

        bokHomePage.verify();
        navigationPage.toogleTopMenu('BOK');
        navigationPage.sideMenuParent('Obsługa klienta','Zamówienie nowej umowy');
        purchaseOrderTypeHallPage.verify();
        purchaseOrderTypeHallPage.newOrder('Klient indywidualny').click();
        newIndOrderHallPage.verify();
        // newIndOrderHallPage.room('Adres instalacji').click();
        // addressRoomNewIndPage.verify();
        // addressRoomNewIndPage.addressSearch('Katowice');
        // addressRoomNewIndPage.next().click();
        // newIndOrderHallPage.verify();
        purchaseOrderTypeHallPage.newOrder('Oferty').click();
        offersRoomNewIndPage.drag();
    })

})
