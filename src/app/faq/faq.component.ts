import { Component, OnInit } from '@angular/core';
import { HttpServicesService } from 'src/app/services/http-services.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  constructor( private http: HttpServicesService) { }

  faqs

  ngOnInit() {
    this.http.faqs('/jv-scan/api/faq/').subscribe( (res: any) => {
      this.faqs = res
    })
  }

}
