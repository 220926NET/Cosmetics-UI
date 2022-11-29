import { Injectable } from '@angular/core';
import { PaymentInfo } from 'src/app/models/paymentInfo';


@Injectable({
  providedIn: 'root'
})
export class PaymentInfoServiceService {

  constructor() { }


  paymentInfo! : PaymentInfo;
  
  savePaymentInfo(paymentInfo :PaymentInfo ){
    this.paymentInfo = paymentInfo;
  }

  showPaymentInfo(){
    return this.paymentInfo;
  }
}
