import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { PaymentInfo } from 'src/app/models/paymentInfo';
import { PaymentInfoServiceService } from 'src/app/services/payment-info-service.service';



@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  products: {
    product: Product,
    quantity: number
  }[] = [];
  totalPrice!: number;
  cartProducts: Product[] = [];
  finalProducts: {id: number, quantity: number}[] = []; 



  checkoutForm = new UntypedFormGroup({
    //fname: new UntypedFormControl('', Validators.required),
    //lname: new UntypedFormControl('', Validators.required),
    cardName: new UntypedFormControl('', Validators.required),
    detail: new UntypedFormControl('', Validators.required),
    //addOne: new UntypedFormControl('', Validators.required),
    //addTwo: new UntypedFormControl(''),
    city: new UntypedFormControl('', Validators.required),
    state: new UntypedFormControl('', Validators.required),
    zipCode: new UntypedFormControl('', Validators.required),
    //country: new UntypedFormControl('', Validators.required)
  });

  constructor(private productService: ProductService, private router: Router, private paymentInfoService:PaymentInfoServiceService) { }

  // payment info to object
  paymentInfo! : PaymentInfo;

  ngOnInit(): void {
    this.productService.getCart().subscribe(
      (cart) => {
        this.products = cart.products;
        this.products.forEach(
          (element) => this.cartProducts.push(element.product)
        );
        this.totalPrice = cart.totalPrice;
      }
    );
  }



  onSubmit(): void {
    this.products.forEach(
      (element) => {
        const id = element.product.id;
        const quantity = element.quantity
        this.finalProducts.push({id, quantity})
      },

    );

    //store payment info 
    this.paymentInfo = {
      cardName: this.checkoutForm.controls['cardName'].value,
      detail: this.checkoutForm.controls['detail'].value,
      city: this.checkoutForm.controls['city'].value,
      state: this.checkoutForm.controls['state'].value,
      zipCode: this.checkoutForm.controls['zipCode'].value,
    }

    if(this.finalProducts.length > 0) {
      this.productService.purchase(this.finalProducts).subscribe(
        (resp) => console.log(resp),
        (err) => console.log(err),
        () => {
          this.router.navigate(['/purchase-success'])
          let cart = {
            cartCount: 0,
            products: [],
            totalPrice: 0.00
          };
          this.productService.setCart(cart);
        } 
      );

    } else {
      alert("empty cart")
      //this.router.navigate(['/purchase-success']);
    }
    //this.router.navigate(['/purchase-success']);
    this.paymentInfoService.savePaymentInfo(this.paymentInfo)
  }

}
