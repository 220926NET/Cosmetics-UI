import { Component, OnInit } from '@angular/core';
import { CheckoutComponent } from '../checkout/checkout.component';

@Component({
  selector: 'app-purchase-success',
  templateUrl: './purchase-success.component.html',
  styleUrls: ['./purchase-success.component.css']
})
export class PurchaseSuccessComponent implements OnInit {

  constructor(private checkout: CheckoutComponent) { }

  ngOnInit(): void {
  }


}
