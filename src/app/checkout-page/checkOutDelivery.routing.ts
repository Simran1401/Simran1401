import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { checkOutDeactivateGuard } from "../guards/checkOutCanDeactivate";
import { checkOutguard } from "../guards/checkOutGuard";
import { profileGuard } from "../guards/profile.guard";
import { CheckoutDeliveryPageComponent } from "./checkout-delivery-page/checkout-delivery-page.component";
import { CheckoutPageComponent } from "./checkout-page.component";
import { PaymentMethodComponent } from "./payment-method/payment-method.component";
import { PlaceOrderComponent } from "./place-order/place-order.component";

const routes: Routes = [

  {
    path: '', canActivate: [profileGuard], component: CheckoutPageComponent, children: [
      { path: 'delivery-page', component: CheckoutDeliveryPageComponent },
      { path: 'payment-method', component: PaymentMethodComponent },
      { path: 'place-order', component: PlaceOrderComponent},
      { path: '', redirectTo: 'delivery-page', pathMatch: 'full' }
    ]
  }

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class checkOutDeliveryRoutingModule { }
