import { NgModule } from "@angular/core";
import { PricingPageComponent } from "./pricing-page/pricing-page.component";
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
import { PrivacyPoicyComponent } from "./privacy-poicy/privacy-poicy.component";
import { ResearchComponent } from "./research/research.component";
import { SingleBlogComponent } from "./single-blog/single-blog.component";
import { SingleProductPageComponent } from "./single-product-page/single-product-page.component";
import { TermsOfServicesComponent } from "./terms-of-services/terms-of-services.component";
import { WishlistComponent } from "./wishlist/wishlist.component";
import { WorkshopDetailsComponent } from "./workshop-details/workshop-details.component";
import { WorkshopComponent } from "./workshop/workshop.component";
import { RouterModule } from "@angular/router";
import { CheckoutPageComponent } from "./checkout-page/checkout-page.component";


const routes = [
  { path: 'research', component: ResearchComponent },
  { path: 'pricing', component: PricingPageComponent },
  { path: 'pricing/end-user-plan', component: EndUserPlansComponent },
  { path: 'pricing/partner-with-us', component: PartnerWithUsComponent },
  { path: 'workshop-page', component: WorkshopComponent },
  { path: 'workshop-details', component: WorkshopDetailsComponent },

  { path: 'contact-us', component: ContactUsComponent },
  { path: 'product-page/:id/:id', component: SingleProductPageComponent },
  { path: 'my-wishlist', component: WishlistComponent },
  { path: 'privacy-policy', component: PrivacyPoicyComponent },
  { path: 'terms-of-services', component: TermsOfServicesComponent },
  { path: 'disclaimer', component: DisclaimerComponent },
  { path: 'cancellation-policy', component: CancellationPolicyComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'cart', component: CartComponent },
  { path: 'practitioner-registeration', component: PractitionerRegisterationComponent },
  { path: 'association-registeration', component: AssociateRegisterationComponent },
  { path: 'blogs', component: BlogsComponent },
  { path: 'event', component: EventsComponent },
  { path: 'single-blog/:id', component: SingleBlogComponent },
  {path:'checkout-page',component:CheckoutPageComponent}
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class allCompRoutingModule { }
