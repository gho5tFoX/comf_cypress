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

    // it("Smoke: Nowa umowa - klient indywidualny", () => {

    //     bokHomePage.verify();
    //     navigationPage.toogleTopMenu('BOK');
    //     navigationPage.sideMenuParent('Obsługa klienta','Zamówienie nowej umowy');
    //     purchaseOrderTypeHallPage.verify();
    //     purchaseOrderTypeHallPage.newOrder('Klient indywidualny');
    //     newIndOrderHallPage.verify();
    //     newIndOrderHallPage.room('BOK');
    //     csoRoomNewIndPage.verify();
    //     csoRoomNewIndPage.next();
    //     newIndOrderHallPage.verify();
    //     newIndOrderHallPage.room('Adres instalacji');
    //     addressRoomNewIndPage.verify();
    //     addressRoomNewIndPage.back();
    //     newIndOrderHallPage.verify();
    //     newIndOrderHallPage.room('Oferty')
    //     offersRoomNewIndPage.verify();
    //     offersRoomNewIndPage.end();
    //     newIndOrderHallPage.verify();
    //     newIndOrderHallPage.room('Zlecenie')
    //     crmIssueDataRoomNewIndPage.verify();
    //     crmIssueDataRoomNewIndPage.back();
    //     newIndOrderHallPage.verify();
    //     newIndOrderHallPage.room('Oświadczenia')
    //     consentRoomNewIndPage.verify();
    //     consentRoomNewIndPage.back();
    //     newIndOrderHallPage.verify();
    //     newIndOrderHallPage.room('Dane klienta');
    //     clientDataRoomNewIndPage.verify();
    //     clientDataRoomNewIndPage.back();
    //     newIndOrderHallPage.verify();
    //     newIndOrderHallPage.room('Dane umowy');
    //     contractDataRoomNewIndPage.verify();
    //     contractDataRoomNewIndPage.back();
    //     newIndOrderHallPage.verify();
    //     newIndOrderHallPage.room('Podsumowanie');
    //     summaryRoomNewIndPage.verify();
    //     summaryRoomNewIndPage.back();
    //     newIndOrderHallPage.verify();

    // })

    it("Nowa umowa - klient indywidualny", () => {

        cy.uidRoute('uid');

        bokHomePage.verify();
        navigationPage.toogleTopMenu('BOK');
        navigationPage.sideMenuParent('Obsługa klienta','Zamówienie nowej umowy');
        purchaseOrderTypeHallPage.verify();
        purchaseOrderTypeHallPage.newOrder('Klient indywidualny');

        cy.wait('@uid');

        newIndOrderHallPage.verify();
        newIndOrderHallPage.room('Adres instalacji');
        addressRoomNewIndPage.verify();
        addressRoomNewIndPage.addressSearch('Katowice');
        addressRoomNewIndPage.next();
        newIndOrderHallPage.verify();
        purchaseOrderTypeHallPage.newOrder('Oferty');
        offersRoomNewIndPage.verify();

        offersRoomNewIndPage.addOffer('@uid');

        offersRoomNewIndPage.end();
        newIndOrderHallPage.verify();
        newIndOrderHallPage.room('Oświadczenia')
        consentRoomNewIndPage.verify();
        consentRoomNewIndPage.sposobPozyskania('Telefoniczny');
        consentRoomNewIndPage.zgodaNaEfakture();
        consentRoomNewIndPage.next();
        newIndOrderHallPage.verify();
        newIndOrderHallPage.room('Dane klienta');
        clientDataRoomNewIndPage.verify();
        clientDataRoomNewIndPage.profilSprzedazy('Domyślny profil sprzedaży');
        clientDataRoomNewIndPage.imie('Jan');
        clientDataRoomNewIndPage.nazwisko('Kowalski');
        clientDataRoomNewIndPage.pesel('41032251691');
        clientDataRoomNewIndPage.next();
        newIndOrderHallPage.verify();
        newIndOrderHallPage.room('Dane umowy');
        contractDataRoomNewIndPage.verify();
        contractDataRoomNewIndPage.next();
        
    })

})
