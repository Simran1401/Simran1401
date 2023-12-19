import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DyProductsComponent } from "./dy-products/dy-products.component";
import { OurProductComponent } from "./our-product.component";
import { ProductDietPlansComponent } from "./product-diet-plans/product-diet-plans.component";
import { ProductJvScanComponent } from "./product-jv-scan/product-jv-scan.component";

const routes: Routes = [
  {
    path: '', component: OurProductComponent,
    children: [
      { path: 'product-jv-scan', component: ProductJvScanComponent },
      { path: 'product-diet-plans', component: ProductDietPlansComponent },
      { path: 'DY-product/:id', component: DyProductsComponent },
      { path: '', redirectTo: 'product-jv-scan', pathMatch: 'full' }
    ]
  }
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ourProductRouting {}
