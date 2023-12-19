import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpServicesService } from '../services/http-services.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  galleyItems = []
  apiUrl = environment.apiUrl;
  slideConfig = {
    "slidesToShow": 4,
    "slidesToScroll": 1,
    "nextArrow": "<svg xmlns='http://www.w3.org/2000/svg' width='200' style='cursor: pointer' fill='currentColor' class='bi bi-chevron-compact-right purple-arrow' style='cursor: pointer;' viewBox='0 0 16 16'><path fill-rule='evenodd' d='M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z'/></svg>",
    "prevArrow": "<svg xmlns='http://www.w3.org/2000/svg' width='200' style='cursor: pointer' fill='currentColor' class='bi bi-chevron-compact-left purple-arrow' viewBox='0 0 16 16'><path fill-rule='evenodd' d='M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z'/></svg>",
  };

  contactUsForm: FormGroup

  LogInModalOpen = false;

  errorMsg;
  successmsg;

  links;

  constructor(private http: HttpServicesService) { }

  ngOnInit() {


    this.http.socialMediaLinks('/jv-scan/api/links/').subscribe((res: any) => {
      this.links = res
    })

    this.contactUsForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      mobile: new FormControl(null, [Validators.required, Validators.minLength(10), Validators.maxLength(12)]),
      queary: new FormControl(null, Validators.required)
    })

    this.http.galleryItems('/jv-scan/api/gallery/').subscribe((res: any) => {
      console.log(res)
      this.galleyItems = res
    })
  }

  backDropClicked(e: boolean) {
    this.LogInModalOpen = e;
  }

  openModal() {
    this.LogInModalOpen = true
  }

  sendQuery() {
    if (this.contactUsForm.invalid) {
      this.errorMsg = 'Please fill the form properly'
      this.successmsg = false;
    } else {
      this.errorMsg = false
      this.successmsg = 'Your query have been saved';
      this.http.sendQuery('/jv-scan/api/contact/', this.contactUsForm.value).subscribe(res => {
        console.log(res);
        this.contactUsForm.reset()
      })
    }
  }

}
