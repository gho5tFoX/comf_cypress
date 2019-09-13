import BOK_HOME_PAGE from '../../support/Pages/BOK/BOK_HOME_PAGE';
import NAVIGATION from '../../support/Pages/NAVIGATION';

import CAT_SERVICES from '../../support/Pages/Administracja/Katalog produktów/CAT_SERVICES';
import CAT_OFFERS from '../../support/Pages/Administracja/Katalog produktów/CAT_OFFERS';
import CAT_PACKAGES from '../../support/Pages/Administracja/Katalog produktów/CAT_PACKAGES';
import CAT_PRODUCTS from '../../support/Pages/Administracja/Katalog produktów/CAT_PRODUCTS';
import CAT_PROMOTIONS from '../../support/Pages/Administracja/Katalog produktów/CAT_PROMOTIONS';

import BIL_BILLING_CYCLES from '../../support/Pages/Administracja/Konfiguracja sprzedaży/BIL_BILLING_CYCLES';
import BIL_BILLING_CYCLE_DEFINITIONS from '../../support/Pages/Administracja/Konfiguracja sprzedaży/BIL_BILLING_CYCLE_DEFINITIONS';
import BIL_PAYMENTS_AND_CHARGES from '../../support/Pages/Administracja/Konfiguracja sprzedaży/BIL_PAYMENTS_AND_CHARGES';
import CAT_VAT from '../../support/Pages/Administracja/Konfiguracja sprzedaży/CAT_VAT';
import CRM_SALES_DATA from '../../support/Pages/Administracja/Konfiguracja sprzedaży/CRM_SALES_DATA';
import CRM_SALES_PROFILES from '../../support/Pages/Administracja/Konfiguracja sprzedaży/CRM_SALES_PROFILES';
import DIC_BILLING_UNITS from '../../support/Pages/Administracja/Konfiguracja sprzedaży/DIC_BILLING_UNITS';
import FIN_ACCOUNT_PLAN from '../../support/Pages/Administracja/Konfiguracja sprzedaży/FIN_ACCOUNT_PLAN';
import FIN_BANK_BOX_OFFICE from '../../support/Pages/Administracja/Konfiguracja sprzedaży/FIN_BANK_BOX_OFFICE';
import FIN_CORRECTION_NUMDEFS from '../../support/Pages/Administracja/Konfiguracja sprzedaży/FIN_CORRECTION_NUMDEFS';
import FIN_INVOICE_NUMDEFS from '../../support/Pages/Administracja/Konfiguracja sprzedaży/FIN_INVOICE_NUMDEFS';

import CRM_CUSTOMER_SERVICE_OFFICES from '../../support/Pages/Administracja/Obsluga_klientow/CRM_CUSTOMER_SERVICE_OFFICES';
import CUSTOMER_FEATURES from '../../support/Pages/Administracja/Obsluga_klientow/CUSTOMER_FEATURES';
import DIC_CANCELLATION_REASONS from '../../support/Pages/Administracja/Obsluga_klientow/DIC_CANCELLATION_REASONS';
import DIC_CONSENTS from '../../support/Pages/Administracja/Obsluga_klientow/DIC_CONSENTS';

import RES_ADMIN_STORES from '../../support/Pages/Administracja/Ewidencja_urzadzen/RES_ADMIN_STORES';
import RES_CATEGORIES from '../../support/Pages/Administracja/Ewidencja_urzadzen/RES_CATEGORIES';
import RES_MODELS from '../../support/Pages/Administracja/Ewidencja_urzadzen/RES_MODELS';
import RES_SUPPLIERS from '../../support/Pages/Administracja/Ewidencja_urzadzen/RES_SUPPLIERS';
import RES_SUPPLY_NUMDEFS from '../../support/Pages/Administracja/Ewidencja_urzadzen/RES_SUPPLY_NUMDEFS';
import RES_TRANSFERS_NUMDEFS from '../../support/Pages/Administracja/Ewidencja_urzadzen/RES_TRANSFERS_NUMDEFS';

import TASK_ISSUE_NUMDEFS from '../../support/Pages/Administracja/Zlecenia/TASK_ISSUE_NUMDEFS';
import TASK_ISSUE_PRIORITIES from '../../support/Pages/Administracja/Zlecenia/TASK_ISSUE_PRIORITIES';
import TASK_ISSUE_RESOLUTIONS from '../../support/Pages/Administracja/Zlecenia/TASK_ISSUE_RESOLUTIONS';
import TASK_ISSUE_STATUSES from '../../support/Pages/Administracja/Zlecenia/TASK_ISSUE_STATUSES';
import TASK_ISSUE_SUMMARY_HINTS from '../../support/Pages/Administracja/Zlecenia/TASK_ISSUE_SUMMARY_HINTS';
import TASK_ISSUE_TAG_DEF from '../../support/Pages/Administracja/Zlecenia/TASK_ISSUE_TAG_DEF';
import TASK_ISSUE_TYPES from '../../support/Pages/Administracja/Zlecenia/TASK_ISSUE_TYPES';
import TASK_SCHEDULE_CARD_DEFINITIONS from '../../support/Pages/Administracja/Zlecenia/TASK_SCHEDULE_CARD_DEFINITIONS';

import TEL_EXCHANGES from '../../support/Pages/Administracja/Telefonia/TEL_EXCHANGES';
import TEL_NUMBERS from '../../support/Pages/Administracja/Telefonia/TEL_NUMBERS';
import TEL_PHONE_NUMBER_TAG_DEF from '../../support/Pages/Administracja/Telefonia/TEL_PHONE_NUMBER_TAG_DEF';
import TEL_TELECOM_OPERATORS from '../../support/Pages/Administracja/Telefonia/TEL_TELECOM_OPERATORS';

describe("Smoke testy: Administracja", () => {

    const bokHomePage = new BOK_HOME_PAGE;
    const navigationPage = new NAVIGATION;  

    beforeEach( () => {
        cy.login();

    })

    it("Smoke: Katalog produktów", () => {

        const catServicePage = new CAT_SERVICES;
        const catOffersPage = new CAT_OFFERS;
        const catPackagesPage = new CAT_PACKAGES;
        const catProductsPage = new CAT_PRODUCTS;
        const catPromotionsPage = new CAT_PROMOTIONS;

        bokHomePage.verify();
        navigationPage.toogleTopMenu('Administracja');
        navigationPage.sideMenuParent('Katalog produktów', 'Usługi');
        catServicePage.verify();
        navigationPage.sideMenuChild('Pakiety');
        catPackagesPage.verify();
        navigationPage.sideMenuChild('Promocje');
        catPromotionsPage.verify();
        navigationPage.sideMenuChild('Produkty');
        catProductsPage.verify();
        navigationPage.sideMenuChild('Oferty');
        catOffersPage.verify();
    })

    it("Smoke: Konfiguracja sprzedaży", () => {

        const bilBillingCyclesPage = new BIL_BILLING_CYCLES;
        const bilBillingCycleDefinitionsPage = new BIL_BILLING_CYCLE_DEFINITIONS;
        const bilPaymentsAndChargesPage = new BIL_PAYMENTS_AND_CHARGES;
        const catVatPage = new CAT_VAT;
        const crmSalesDataPage = new CRM_SALES_DATA;
        const crmSalesProfilesPage = new CRM_SALES_PROFILES;
        const dicBillingUnitsPage = new DIC_BILLING_UNITS;
        const finAccountPlanPage = new FIN_ACCOUNT_PLAN;
        const finBankBoxOfficePage = new FIN_BANK_BOX_OFFICE;
        const finCorrectionNumdefsPage = new FIN_CORRECTION_NUMDEFS;
        const finInvoiceNumdefsPage = new FIN_INVOICE_NUMDEFS;

        bokHomePage.verify();
        navigationPage.toogleTopMenu('Administracja');
        navigationPage.sideMenuParent('Konfiguracja sprzedaży', 'Dane sprzedawcy do faktury');
        crmSalesDataPage.verify();
        navigationPage.sideMenuChild('Konta bankowe i kasy');
        finBankBoxOfficePage.verify();
        navigationPage.sideMenuChild('Definicje cykli bilingowych');
        bilBillingCycleDefinitionsPage.verify();
        navigationPage.sideMenuChild('Cykle bilingowe');
        bilBillingCyclesPage.verify();
        navigationPage.sideMenuChild('Płatności i naliczanie');
        bilPaymentsAndChargesPage.verify();
        navigationPage.sideMenuChild('Profile sprzedaży');
        crmSalesProfilesPage.verify();
        navigationPage.sideMenuChild('Konta księgowe');
        finAccountPlanPage.verify();
        navigationPage.sideMenuChild('Konta księgowe');
        finAccountPlanPage.verify();
        navigationPage.sideMenuChild('Stawki VAT');
        catVatPage.verify();
        navigationPage.sideMenuChild('Numeracje faktur');
        finInvoiceNumdefsPage.verify();
        navigationPage.sideMenuChild('Numeracje korekt');
        finCorrectionNumdefsPage.verify();
        navigationPage.sideMenuChild('Jednostki miary');
        dicBillingUnitsPage.verify();
        
    })

    it("Smoke: Obsługa klientów", () => {

        const crmCustomerServicePage = new CRM_CUSTOMER_SERVICE_OFFICES;
        const customerFeaturesPage = new CUSTOMER_FEATURES;
        const dicCancellationReasonsPage = new DIC_CANCELLATION_REASONS;
        const dicConsentsPage = new DIC_CONSENTS;

        bokHomePage.verify();
        navigationPage.toogleTopMenu('Administracja');
        navigationPage.sideMenuParent('Obsługa klientów', 'Biura obsługi klienta');
        crmCustomerServicePage.verify();
        navigationPage.sideMenuChild('Oświadczenia');
        dicConsentsPage.verify();
        navigationPage.sideMenuChild('Znaczniki');
        customerFeaturesPage.verify();
        navigationPage.sideMenuChild('Powody rezygnacji');
        dicCancellationReasonsPage.verify();
    })

    it("Smoke: Ewidencja urządzeń", () => {

        const resAdminStoresPage = new RES_ADMIN_STORES;
        const resCategoriesPage = new RES_CATEGORIES;
        const resModelsPage = new RES_MODELS;
        const resSuppliersPage = new RES_SUPPLIERS;
        const resSupplyNumdefsPage = new RES_SUPPLY_NUMDEFS;
        const resTransfersNumdefsPage = new RES_TRANSFERS_NUMDEFS;

        bokHomePage.verify();
        navigationPage.toogleTopMenu('Administracja');
        navigationPage.sideMenuParent('Ewidencja urządzeń', 'Magazyny');
        resAdminStoresPage.verify();
        navigationPage.sideMenuChild('Dostawcy');
        resSuppliersPage.verify();
        navigationPage.sideMenuChild('Numeracje dostaw');
        resSupplyNumdefsPage.verify();
        navigationPage.sideMenuChild('Numeracje przemagazynowań');
        resTransfersNumdefsPage.verify();
        navigationPage.sideMenuChild('Kategorie urządzeń');
        resCategoriesPage.verify();
        navigationPage.sideMenuChild('Modele urządzeń');
        resModelsPage.verify();

    })

    it("Smoke: Zlecenia", () => {

        const taskIssueNumdefsPage = new TASK_ISSUE_NUMDEFS;
        const taskIssuePrioritiesPage = new TASK_ISSUE_PRIORITIES;
        const taskIssueResolutionsPage = new TASK_ISSUE_RESOLUTIONS;
        const taskIssueStatusesPage = new TASK_ISSUE_STATUSES;
        const taskIssueSummaryHintsPage = new TASK_ISSUE_SUMMARY_HINTS;
        const taskIssueTagDefPage = new TASK_ISSUE_TAG_DEF;
        const taskIssueTypesPage = new TASK_ISSUE_TYPES;
        const taskScheduleCardDefinitionsPage = new TASK_SCHEDULE_CARD_DEFINITIONS;

        bokHomePage.verify();
        navigationPage.toogleTopMenu('Administracja');
        navigationPage.sideMenuParent('Zlecenia', 'Priorytety');
        taskIssuePrioritiesPage.verify();
        navigationPage.sideMenuChild('Rozwiązania');
        taskIssueResolutionsPage.verify();
        navigationPage.sideMenuChild('Statusy');
        taskIssueStatusesPage.verify();
        navigationPage.sideMenuChild('Typy');
        taskIssueTypesPage.verify();
        navigationPage.sideMenuChild('Definicje kart');
        taskScheduleCardDefinitionsPage.verify();
        navigationPage.sideMenuChild('Etykiety');
        taskIssueTagDefPage.verify();
        navigationPage.sideMenuChild('Numeracje');
        taskIssueNumdefsPage.verify();
        navigationPage.sideMenuChild('Cele zlecenia');
        taskIssueSummaryHintsPage.verify();

    })

    it.only("Smoke: Telefonia", () => {

        const telExchangesPage = new TEL_EXCHANGES;
        const telNumbersPage = new TEL_NUMBERS;
        const telPhoneNumberTagDefPage = new TEL_PHONE_NUMBER_TAG_DEF;
        const telTelecomOperatorsPage = new TEL_TELECOM_OPERATORS;

        bokHomePage.verify();
        navigationPage.toogleTopMenu('Administracja');
        navigationPage.sideMenuParent('Telefonia', 'Operatorzy');
        telTelecomOperatorsPage.verify();
        navigationPage.sideMenuChild('Centrale');
        telExchangesPage.verify();
        navigationPage.sideMenuChild('Numery');
        telNumbersPage.verify();
        navigationPage.sideMenuChild('Etykiety numerów');
        telPhoneNumberTagDefPage.verify();

    })

})