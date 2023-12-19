import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
// import { ServiceWorkerModule } from '@angular/service-worker';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingRoutingModule } from './app-routing-routing.module';
import { HomeComponent } from './home/home.component';
import { HomeSectionOneComponent } from './home/home-section-one/home-section-one.component';
import { HomeSectionTwoComponent } from './home/home-section-two/home-section-two.component';
import { HomeSectionThreeComponent } from './home/home-section-three/home-section-three.component';
import { HomeSectionFourComponent } from './home/home-section-four/home-section-four.component';
import { HomeSectionFiveComponent } from './home/home-section-five/home-section-five.component';
import { HomeSectionSixComponent } from './home/home-section-six/home-section-six.component';
import { HomeSectionSevenComponent } from './home/home-section-seven/home-section-seven.component';
import { HomeSectionEightComponent } from './home/home-section-eight/home-section-eight.component';
import { FooterComponent } from './footer/footer.component';
// import { environment } from '../environments/environment';
import { companyModule } from './company/company.module';
import { sharedModule } from './shared.module';
import { ourProductModule } from './our-product/our-product.module';
import { workshopAccessModule } from './workshop-access/workshop-access.module';
import { ProfileModule } from './profile/profileModule';
import { allCompModule } from './allComponents.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    HomeSectionOneComponent,
    HomeSectionTwoComponent,
    HomeSectionThreeComponent,
    HomeSectionFourComponent,
    HomeSectionFiveComponent,
    HomeSectionSixComponent,
    HomeSectionSevenComponent,
    HomeSectionEightComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    companyModule,
    ourProductModule,
    sharedModule,
    workshopAccessModule,
    ProfileModule,
    allCompModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    // ServiceWorkerModule.register('ngsw-worker.js', {
    //   enabled: environment.production,
    //   // Register the ServiceWorker as soon as the app is stable
    //   // or after 30 seconds (whichever comes first).
    //   registrationStrategy: 'registerWhenStable:30000'
    // })
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
