import { Component, Input, OnInit } from '@angular/core';
import { CheckoutComponent } from '../checkout/checkout.component';
import { PaymentInfo } from 'src/app/models/paymentInfo';
import { PaymentInfoServiceService } from 'src/app/services/payment-info-service.service';
import { Product } from 'src/app/models/product';
import { CartInfoService } from 'src/app/services/cart-info.service';


@Component({
  selector: 'app-purchase-success',
  templateUrl: './purchase-success.component.html',
  styleUrls: ['./purchase-success.component.css']
})
export class PurchaseSuccessComponent implements OnInit {

  constructor(public checkout: CheckoutComponent, private paymentInfoService:PaymentInfoServiceService, private cartInfo: CartInfoService) { }


  ngOnInit(): void {
      this.paymentInfo = this.paymentInfoService.showPaymentInfo();
      this.products = this.cartInfo.showCartInfo();
      this.totalPrice = this.cartInfo.showTotalPrice();
      
  }

  paymentInfo! : PaymentInfo;

  products: {
    product: Product,
    quantity: number
  }[] = [];
  totalPrice! : number;
  


}
