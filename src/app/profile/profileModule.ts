import { NgModule } from "@angular/core";
import { AddressesComponent } from "./addresses/addresses.component";
import { OrdersComponent } from "./orders/orders.component";
import { PersonalDetailsComponent } from "./personal-details/personal-details.component";
import { ProfileComponent } from "./profile.component";
import { RefferAndEarnComponent } from "./reffer-and-earn/reffer-and-earn.component";
import { profileRoutingModule } from "./profile.routing";
import { sharedModule } from "../shared.module";
import { MenuComponent } from "./menu/menu.component";



@NgModule({
  declarations: [
    ProfileComponent,
    PersonalDetailsComponent,
    AddressesComponent,
    OrdersComponent,
    RefferAndEarnComponent,
    MenuComponent
  ],
  imports: [
    profileRoutingModule,
    sharedModule
  ]
})


export class ProfileModule {}
