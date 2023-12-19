import { NgModule } from "@angular/core";
import { LogInOrSignUpComponent } from "./header/log-in-or-sign-up/log-in-or-sign-up.component";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { ShortLengthPipe } from "./short-length.pipe";
import { SlickCarouselModule } from "ngx-slick-carousel";

@NgModule({
  declarations: [
    LogInOrSignUpComponent,
    ShortLengthPipe
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    SlickCarouselModule
  ],
  exports: [
    LogInOrSignUpComponent,
    ReactiveFormsModule,
    CommonModule,
    SlickCarouselModule,
    ShortLengthPipe
  ]
})

export class sharedModule { }
