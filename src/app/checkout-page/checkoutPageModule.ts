import { NgModule } from "@angular/core";
import { CheckoutDeliveryPageComponent } from "./checkout-delivery-page/checkout-delivery-page.component";
import { CheckoutPageComponent } from "./checkout-page.component";
import { PaymentMethodComponent } from "./payment-method/payment-method.component";
import { PlaceOrderComponent } from "./place-order/place-order.component";
import { checkOutDeliveryRoutingModule } from "./checkOutDelivery.routing";
import { sharedModule } from "../shared.module";


@NgModule({
  declarations: [
    CheckoutPageComponent,
    CheckoutDeliveryPageComponent,
    PaymentMethodComponent,
    PlaceOrderComponent
  ],
  imports: [
    checkOutDeliveryRoutingModule,
    sharedModule
  ]
})

export class checkoutPageModule { }
