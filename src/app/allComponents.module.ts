import { NgModule } from "@angular/core";
import { AssociateRegisterationComponent } from "./associate-registeration/associate-registeration.component";
import { BlogsComponent } from "./blogs/blogs.component";
import { CancellationPolicyComponent } from "./cancellation-policy/cancellation-policy.component";
import { CartComponent } from "./cart/cart.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";
import { DisclaimerComponent } from "./disclaimer/disclaimer.component";
import { EventsComponent } from "./events/events.component";
import { FaqComponent } from "./faq/faq.component";
import { PractitionerRegisterationComponent } from "./practitioner-registeration/practitioner-registeration.component";
import { EndUserPlansComponent } from "./pricing-page/end-user-plans/end-user-plans.component";
import { PartnerWithUsComponent } from "./pricing-page/partner-with-us/partner-with-us.component";
import { PricingPageComponent } from "./pricing-page/pricing-page.component";
import { PrivacyPoicyComponent } from "./privacy-poicy/privacy-poicy.component";
import { ResearchComponent } from "./research/research.component";
import { SingleBlogComponent } from "./single-blog/single-blog.component";
import { SingleProductPageComponent } from "./single-product-page/single-product-page.component";
import { TermsOfServicesComponent } from "./terms-of-services/terms-of-services.component";
import { WishlistComponent } from "./wishlist/wishlist.component";
import { WorkshopDetailsComponent } from "./workshop-details/workshop-details.component";
import { WorkshopComponent } from "./workshop/workshop.component";
import { sharedModule } from "./shared.module";
import { allCompRoutingModule } from "./allComp.routing.module";



@NgModule({
  declarations: [
    ResearchComponent,
    ContactUsComponent,
    SingleProductPageComponent,
    PricingPageComponent,
    WorkshopComponent,
    WorkshopDetailsComponent,
    WishlistComponent,
    PrivacyPoicyComponent,
    TermsOfServicesComponent,
    DisclaimerComponent,
    CancellationPolicyComponent,
    FaqComponent,
    CartComponent,
    PractitionerRegisterationComponent,
    AssociateRegisterationComponent,
    BlogsComponent,
    SingleBlogComponent,
    EventsComponent,
    PartnerWithUsComponent,
    EndUserPlansComponent
  ],
  imports: [
    allCompRoutingModule,
    sharedModule
  ]
})


export class allCompModule { }
