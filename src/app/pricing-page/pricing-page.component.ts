import { Component, OnInit } from '@angular/core';
import { HttpServicesService } from '../services/http-services.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-pricing-page',
  templateUrl: './pricing-page.component.html',
  styleUrls: ['./pricing-page.component.css']
})
export class PricingPageComponent implements OnInit {
  renderer: any;

  LogInModalOpen = false;


  practitionerForm: FormGroup;
  errorText;
  successMsg;

  redeirectionLinks

  constructor(private http: HttpServicesService, private router: Router) { }


  ngOnInit() {



    this.http.getPartner('/jv-scan/api/partner/').subscribe(res => {
      this.redeirectionLinks = res[0]
    })


    this.errorText = false;
    this.successMsg = false;
    this.practitionerForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      phone: new FormControl(null, [Validators.required, Validators.minLength(10), Validators.maxLength(12)]),
      name: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      country_code: new FormControl(null, Validators.required),
      course_mode: new FormControl(null, Validators.required),
      course_level: new FormControl(null, Validators.required)
    })
  }

  backDropClicked(e: boolean) {
    this.LogInModalOpen = e;
  }

  joinUs() {

    if (this.practitionerForm.invalid) {
      this.errorText = 'Please fill the form correctly';
      this.successMsg = false;
    }
    if (this.practitionerForm.controls['email'].errors) {
      this.errorText = 'Enter a valid email address';
      this.successMsg = false;
    }
    if (this.practitionerForm.controls['phone'].errors) {
      this.errorText = 'Enter a valid Phone number';
      this.successMsg = false;
    }
    if (this.practitionerForm.valid) {
      this.http.becomeAPractitioner('/jv-scan/api/practitioner/', this.practitionerForm.value).subscribe((res: any) => {

        this.router.navigate(['/']).then(result => {
          window.location.href = this.redeirectionLinks.practitioner_link},
        )

          this.practitionerForm.reset();

          console.log(res)
          this.successMsg = 'you have registered yourself successfully please LogIn';
          this.errorText = false;
        })
      }
  }

  openModal() {
    this.LogInModalOpen = true
  }


}
