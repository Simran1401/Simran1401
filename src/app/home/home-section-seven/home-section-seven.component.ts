import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpServicesService } from 'src/app/services/http-services.service';

@Component({
  selector: 'app-home-section-seven',
  templateUrl: './home-section-seven.component.html',
  styleUrls: ['./home-section-seven.component.css']
})
export class HomeSectionSevenComponent implements OnInit {

  constructor(private http: HttpServicesService, private router: Router) { }

  imageUrl='https://jvscan.gftpl.in'
  practitionerForm: FormGroup;
  AssociateForm: FormGroup;
  errorText;
  successMsg;

  errorTextAssociate;
  successMsgAssociate;


  redeirectionLinks;

  userSignedUp

  ngOnInit() {


    this.http.getPartner('/jv-scan/api/partner/').subscribe(res => {
      this.redeirectionLinks = res[0]
    })
    this.getPartner();

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


    this.AssociateForm = new FormGroup({
      name_associate: new FormControl(null, [Validators.required]),
      phone_associate: new FormControl(null, [Validators.required, Validators.minLength(10), Validators.maxLength(12)]),
      email_associate: new FormControl(null, [Validators.required, Validators.email]),
      password_associate: new FormControl(null, [Validators.required])
    })
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
          window.location.href = this.redeirectionLinks.practitioner_link
        },
        )
        console.log(this.redeirectionLinks[0].practitioner_link);

        this.practitionerForm.reset();

        console.log(res)
        this.successMsg = 'you have registered yourself successfully please LogIn';
        this.errorText = false;
      })
    }
  }

  joinUsAssociate() {
    if (this.AssociateForm.invalid) {
      this.errorTextAssociate = 'Please fill the form correctly';
      this.successMsgAssociate = false;
    }
    if (this.AssociateForm.controls['email_associate'].errors) {
      this.errorTextAssociate = 'Enter a valid email address';
      this.successMsgAssociate = false;
    }
    if (this.AssociateForm.controls['phone_associate'].errors) {
      this.errorTextAssociate = 'Enter a valid Phone number';
      this.successMsgAssociate = false;
    }

    if (this.AssociateForm.valid) {
      this.router.navigate(['/']).then(result => {
        window.location.href = this.redeirectionLinks.associate_link
      },
      )
    }
  }

  partnerList:any;
  getPartner(){
    this.http.getPartnerDetail().subscribe(res=>{
      this.partnerList=res;
    })
  }
}
