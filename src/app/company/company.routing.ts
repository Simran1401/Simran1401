import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutUsComponent } from "./about-us/about-us.component";
import { CompanyComponent } from "./company.component";
import { ResearchAndTechnologyComponent } from "./research-and-technology/research-and-technology.component";

const routes: Routes = [

  {
    path: '', component: CompanyComponent,
    children: [
      { path: 'about-us', component: AboutUsComponent },
      { path: 'research-and-technology', component: ResearchAndTechnologyComponent },
      { path: '', redirectTo: 'about-us', pathMatch: 'full' }
    ]
  }

]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})


export class companyRouter {}
