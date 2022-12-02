export class PaymentInfo{
    cardName : string
    detail : string
    city : string
    state : string
    zipCode : number

    constructor(cardName : string, detail : string, city : string, state : string, zipCode : number){
        this.cardName = cardName;
        this.detail = detail;
        this.city = city;
        this.state = state;
        this.zipCode = zipCode;
    }
}