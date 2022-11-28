import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { PaymentInfo } from 'src/app/models/paymentInfo';

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

  constructor(private productService: ProductService, private router: Router) { }

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

  //testing code store payment info
  // PaymentInfo(){
  //   this.checkoutForm.controls['cardName'].value;
  //   this.checkoutForm.controls['detail'].value;//assume it is street detail
  //   this.checkoutForm.controls['city'].value;
  //   this.checkoutForm.controls['state'].value;
  //   this.checkoutForm.controls['zipCode'].value;

  // }

  //payment infor object
  paymentInfo! : PaymentInfo;

  onSubmit(): void {
    this.products.forEach(
      (element) => {
        const id = element.product.id;
        const quantity = element.quantity
        this.finalProducts.push({id, quantity})
      },

    );
    
     //store payment infor to object
     this.paymentInfo.cardName = this.checkoutForm.controls['cardName'].value;
     this.paymentInfo.detail = this.checkoutForm.controls['detail'].value;
     this.paymentInfo.city = this.checkoutForm.controls['city'].value;
     this.paymentInfo.state = this.checkoutForm.controls['state'].value;
     this.paymentInfo.zipCode = this.checkoutForm.controls['zipCode'].value;
     ///
    
    if(this.finalProducts.length > 0) {
      this.productService.purchase(this.finalProducts).subscribe(
        (resp) => console.log(resp),
        (err) => console.log(err),
        () => {
          let cart = {
            cartCount: 0,
            products: [],
            totalPrice: 0.00
          };
          this.productService.setCart(cart);
          this.router.navigate(['/purchase-success']);
        } 
      );

    } else {
      this.router.navigate(['/purchase-success']);
    }
  }

}
