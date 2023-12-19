import { NgModule } from "@angular/core";
import { AboutUsComponent } from "./about-us/about-us.component";
import { CompanyComponent } from "./company.component";
import { ResearchAndTechnologyComponent } from "./research-and-technology/research-and-technology.component";
import { companyRouter } from "./company.routing";
import { sharedModule } from "../shared.module";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AboutUsComponent,
    ResearchAndTechnologyComponent,
    CompanyComponent,
  ],
  imports: [
    companyRouter,
    sharedModule,
    ReactiveFormsModule
  ]
})

export class companyModule { }
