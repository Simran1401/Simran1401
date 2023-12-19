import { NgModule } from "@angular/core";
import { OurProductComponent } from "./our-product.component";
import { ProductDietPlansComponent } from "./product-diet-plans/product-diet-plans.component";
import { ProductJvScanComponent } from "./product-jv-scan/product-jv-scan.component";
import { ourProductRouting } from "./ourProduct.routing";
import { DyProductsComponent } from "./dy-products/dy-products.component";
import { sharedModule } from "../shared.module";

@NgModule({
  declarations: [
    OurProductComponent,
    ProductJvScanComponent,
    ProductDietPlansComponent,
    DyProductsComponent
  ],
  imports: [
    ourProductRouting,
    sharedModule
  ]
})

export class ourProductModule {}
