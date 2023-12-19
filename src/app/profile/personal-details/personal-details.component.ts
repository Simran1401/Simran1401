import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpServicesService } from 'src/app/services/http-services.service';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent implements OnInit {



  persoanlDetails: FormGroup

  error;
  success;

  details;

  number;

  formIsOpen

  constructor(private http: HttpServicesService) { }

  ngOnInit() {


    this.formIsOpen = false;

    this.http.getPersonalDetails('/jv-scan/api/personal_detail/').subscribe((res: any) => {
      this.details = res

      localStorage.setItem('PersonalDetails', JSON.stringify(res))

      if (res.name && res.email && res.phone) {
        this.number = 49;
      }
      if (res.username && res.name && res.email && res.phone) {
        this.number = 67;
      }
      if (res.username && res.name && res.email && res.phone && res.date_of_birth || res.date_of_anniversary) {
        this.number = 83;
      }
      if (res.username && res.name && res.email && res.phone && res.date_of_birth && res.date_of_anniversary) {
        this.number = 100;
      }
      this.FormSetUp()
    })


    this.error = false;

  }

  openForm() {
    this.formIsOpen = true

  }

  onSubmit() {

    if (this.persoanlDetails.valid) {
      this.http.addPersonalDetails('/jv-scan/api/personal_detail/', this.persoanlDetails.value).subscribe(res => {
        console.log(res);
      })
      this.persoanlDetails.reset()
      this.success = 'Details saved sucessfully'
      this.error = false
      this.formIsOpen = false
    } else {
      this.success = false;
      this.error = 'Please fill the details carefully'
    }
  }

  back() {
    this.formIsOpen = false
  }


  private FormSetUp() {

      let dets = JSON.parse(localStorage.getItem('PersonalDetails'))

    let username = dets.username;
    let name = dets.name;
    let email = dets.email;
    let phone = dets.phone;
    let date_of_birth = dets.date_of_birth;
    let date_of_anniversary = dets.date_of_anniversary

    this.persoanlDetails = new FormGroup({
      username: new FormControl(username, Validators.required),
      name: new FormControl(name, Validators.required),
      email: new FormControl(email, Validators.required),
      phone: new FormControl(phone, Validators.required),
      date_of_birth: new FormControl(date_of_birth),
      date_of_anniversary: new FormControl(date_of_anniversary)
    })
  }
}
