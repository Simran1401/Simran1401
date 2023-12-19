import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { profileGuard } from "../guards/profile.guard";
import { AddressesComponent } from "./addresses/addresses.component";
import { OrdersComponent } from "./orders/orders.component";
import { PersonalDetailsComponent } from "./personal-details/personal-details.component";
import { ProfileComponent } from "./profile.component";
import { RefferAndEarnComponent } from "./reffer-and-earn/reffer-and-earn.component";

const routes: Routes = [
  {
    path: '', canActivate: [profileGuard], component: ProfileComponent, children: [
      { path: 'personal-details', component: PersonalDetailsComponent },
      { path: 'addresses', component: AddressesComponent },
      { path: 'orders', component: OrdersComponent },
      { path: 'reffer-and-earn', component: RefferAndEarnComponent },
      { path: '', redirectTo: 'personal-details', pathMatch: 'full' }
    ]
  },
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class profileRoutingModule { }
