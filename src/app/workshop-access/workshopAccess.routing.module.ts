import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DyProgrammesComponent } from "./dy-programmes/dy-programmes.component";
import { WorkshopAccessProgramsComponent } from "./workshop-access-programs/workshop-access-programs.component";
import { WorkshopAccessComponent } from "./workshop-access.component";

const routes: Routes = [
  {
    path: '', component: WorkshopAccessComponent,
    children: [
      { path: 'all-programs', component: WorkshopAccessProgramsComponent },
      { path: 'dy-workshopProgram/:id', component: DyProgrammesComponent },
      { path: '', redirectTo: 'all-programs', pathMatch: 'full' }
    ]
  }

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class workshopAccessRouting { }
