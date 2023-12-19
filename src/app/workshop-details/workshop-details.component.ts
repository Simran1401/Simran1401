import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpServicesService } from '../services/http-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-workshop-details',
  templateUrl: './workshop-details.component.html',
  styleUrls: ['./workshop-details.component.css']
})
export class WorkshopDetailsComponent implements OnInit {

  LogInModalOpen = false;
  joinOnlineCourse: FormGroup;
  errorText;
  successMsg;
  practitionerForm: any;

  redeirectionLinks
  constructor(private http: HttpServicesService, private router: Router) { }

  ngOnInit() {



    this.http.getPartner('/jv-scan/api/partner/').subscribe(res => {
      this.redeirectionLinks = res[0]
    })


    this.joinOnlineCourse = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'phone': new FormControl(null, [Validators.required, Validators.minLength(10), Validators.maxLength(12)]),
      'name': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required),
      'country_code': new FormControl(null, Validators.required),
      'course_mode': new FormControl('Choose an Option', Validators.required),
      'course_level': new FormControl('Choose a Level', Validators.required),
      'mustCheck': new FormControl(null, Validators.required)
    })
  }

  onSubmit() {

    let data = {
      'email': this.joinOnlineCourse.controls['email'].value,
      'phone': this.joinOnlineCourse.controls['phone'].value,
      'name': this.joinOnlineCourse.controls['name'].value,
      'password': this.joinOnlineCourse.controls['password'].value,
      'country_code': this.joinOnlineCourse.controls['country_code'].value,
      'course_mode': this.joinOnlineCourse.controls['course_mode'].value,
      'course_level': this.joinOnlineCourse.controls['course_level'].value,
    }

    console.log(data);


    if (this.joinOnlineCourse.invalid) {
      this.errorText = 'Please fill the form correctly';
      this.successMsg = false;
      if (this.joinOnlineCourse.controls['course_mode'].value == 'Choose an Option') {
        this.joinOnlineCourse.controls['course_mode'].invalid
      }
      if (this.joinOnlineCourse.controls['course_level'].value == 'Choose a Level') {
        this.joinOnlineCourse.controls['course_level'].invalid
      }
    }
    if (this.joinOnlineCourse.controls['email'].errors) {
      this.errorText = 'Enter a valid email address';
      this.successMsg = false;
    }
    if (this.joinOnlineCourse.controls['phone'].errors) {
      this.errorText = 'Enter a valid Phone number';
      this.successMsg = false;
    }
    if (this.joinOnlineCourse.valid) {
      this.http.becomeAPractitioner('/jv-scan/api/practitioner/', data).subscribe(res => {

        this.router.navigate(['/']).then(result => {
          window.location.href = this.redeirectionLinks.practitioner_link
        })

        this.joinOnlineCourse.reset();
        console.log(res)
        this.successMsg = 'you have registered yourself successfully please LogIn';
        this.errorText = false;
      })
    }
  }

  backDropClicked(e: boolean) {
    this.LogInModalOpen = e;
  }

  openModal() {
    this.LogInModalOpen = true
  }

}
