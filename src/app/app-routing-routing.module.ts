import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },

  {
    path: 'company',
    loadChildren: () => import('./company/company.module').then(m => { return m.companyModule })
  },
  {
    path: 'our-products',
    loadChildren: () => import('./our-product/our-product.module').then(m => { return m.ourProductModule })
  },
  {
    path: 'workshop-access',
    loadChildren: () => import('./workshop-access/workshop-access.module').then(m => { return m.workshopAccessModule })
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profileModule').then(m => { return m.ProfileModule })
  },
  {
    path: 'checkout-page',
    loadChildren: () => import('./checkout-page/checkoutPageModule').then(m => { return m.checkoutPageModule })
  },
  {
    path: '',
    loadChildren: () => import('./allComponents.module').then(m => { return m.allCompModule})
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingRoutingModule { }
