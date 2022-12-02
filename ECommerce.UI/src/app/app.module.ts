import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { DisplayProductsComponent } from './components/display-products/display-products.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WishlistComponent } from './components/wishlist/wishlist.component'
import { ProductPageComponent } from './components/product-page/product-page.component';
import { ProductReviewComponent } from './components/product-review/product-review.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { PurchaseSuccessComponent } from './components/purchase-success/purchase-success.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    ProductCardComponent,
    CartComponent,
    CheckoutComponent,
    DisplayProductsComponent,
    WishlistComponent,
    SidebarComponent,
    ProductPageComponent,
    ProductReviewComponent,
    SidebarComponent,
    FooterComponent,
    PurchaseSuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [CheckoutComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
