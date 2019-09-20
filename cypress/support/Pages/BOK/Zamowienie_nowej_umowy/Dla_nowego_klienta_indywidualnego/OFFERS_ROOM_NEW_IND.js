

export default class OFFERS_ROOM_NEW_IND {

    heimdallurl = 'http://192.168.1.21:7500';
    clientsecret = 'G24UsTS9D0Bj';
    offerId = '19';
    offerName = 'PROMO Telewizja Kuchenna V1';
    serviceStartDate = '2019-09-01T10:11:38Z'
    serviceStopDate = '9999-12-31T00:00:00Z'
    baseUrl = 'http://192.168.1.21:7580';
    bearerToken ='';
    UID = '';

    verify() {
        cy.verify('Wybierz oferty dla zamówienia');
    } 

    addOffer(uid) {

        cy.get(uid).then( (xhr)=> {
            this.UID = xhr.responseBody['PURCHASE_ORDER_UID'];
            cy.request('POST', `${this.heimdallurl}/security/oauth/token?grant_type=password&username=sort&password=sort&client_id=sortbss&client_secret=${this.clientsecret}`)
                    .then((response) => {
                    expect(response.body).to.have.property('access_token');
                    this.bearerToken = response.body.access_token;
                    cy.request({
                        method:'POST', 
                        url: `${this.baseUrl}/api/sort/crm/order/addOrderItem`,
                        headers: {
                            'content-type': 'application/json',
                            'Authorization': 'bearer '+`${this.bearerToken}`
                                },             
                    body: {
                        "orderUid":`${this.UID}`,
                        "offerId": `${this.offerId}`,
                        "offerName":`${this.offerName}`,
                        "validSince":`${this.serviceStartDate}`,
                        "validUntil": `${this.serviceStopDate}`,
                        "dependentProducts":[]
                    }

                        
            
                    })
                })
        })
    }

    end() {
        cy.get('button').contains('Zakończ wybieranie ofert').click();
    }

}