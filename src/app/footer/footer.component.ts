import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpServicesService } from '../services/http-services.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private http: HttpServicesService) { }

  links;

  emailSubscribe: FormGroup;

  errorText;

  successMsg;

  ngOnInit() {
    this.errorText = false
    this.successMsg = false
    this.http.socialMediaLinks('/jv-scan/api/links/').subscribe((res: any) => {
      this.links = res
    })

    this.emailSubscribe = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email])
    })

  }

  subscribe() {

    var data = {
      email: this.emailSubscribe.controls['email'].value
    }

    if (this.emailSubscribe.valid) {
      this.http.subscribe('/jv-scan/api/subscribe/', data).subscribe(res => {
        console.log(res)
      })
      this.successMsg = 'Subscribed successfully'
      this.errorText = false;
      this.emailSubscribe.reset();
    } else {
      this.successMsg = false;

      if (this.emailSubscribe.controls['email'].errors['required']) {
        this.errorText = "Feild can not be empty"
      }

      if (this.emailSubscribe.controls['email'].errors['email']) {
        this.errorText = "Enter a valid email address"
      }
    }
  }
}
