import { NgModule } from "@angular/core";
import { WorkshopAccessComponent } from "./workshop-access.component";
import { DyProgrammesComponent } from "./dy-programmes/dy-programmes.component";
import { workshopAccessRouting } from "./workshopAccess.routing.module";
import { WorkshopAccessMenuComponent } from "./workshop-access-menu/workshop-access-menu.component";
import { sharedModule } from "../shared.module";
import { WorkshopAccessProgramsComponent } from "./workshop-access-programs/workshop-access-programs.component";

@NgModule({
  declarations: [
    WorkshopAccessComponent,
    DyProgrammesComponent,
    WorkshopAccessMenuComponent,
    WorkshopAccessProgramsComponent
  ],
  imports: [
    workshopAccessRouting,
    sharedModule,
  ]
})

export class workshopAccessModule {}
