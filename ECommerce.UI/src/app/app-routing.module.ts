import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { DisplayProductsComponent } from './components/display-products/display-products.component';
import { LoginComponent } from './components/login/login.component';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { RegisterComponent } from './components/register/register.component';
import { PurchaseSuccessComponent } from './components/purchase-success/purchase-success.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';


const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "home", component: DisplayProductsComponent },
  { path: "cart", component:CartComponent},
  { path: "checkout", component: CheckoutComponent },
  { path: "wishlist", component: WishlistComponent},
  { path: "product/:apiid", component: ProductPageComponent },
  { path: "purchase-success", component: PurchaseSuccessComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
