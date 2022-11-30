import { Component, Input, OnInit } from '@angular/core';
import { CheckoutComponent } from '../checkout/checkout.component';
import { PaymentInfo } from 'src/app/models/paymentInfo';
import { PaymentInfoServiceService } from 'src/app/services/payment-info-service.service';


@Component({
  selector: 'app-purchase-success',
  templateUrl: './purchase-success.component.html',
  styleUrls: ['./purchase-success.component.css']
})
export class PurchaseSuccessComponent implements OnInit {

  constructor(public checkout: CheckoutComponent, private paymentInfoService:PaymentInfoServiceService) { }


  ngOnInit(): void {
      this.paymentInfo = this.paymentInfoService.showPaymentInfo();
  }

  paymentInfo! : PaymentInfo;

}
