import { Component, OnInit } from '@angular/core';
import { HttpServicesService } from 'src/app/services/http-services.service';

@Component({
  selector: 'app-home-section-eight',
  templateUrl: './home-section-eight.component.html',
  styleUrls: ['./home-section-eight.component.css']
})
export class HomeSectionEightComponent implements OnInit {

  constructor( private http: HttpServicesService) { }

  faqs

  ngOnInit() {
    this.http.faqs('/jv-scan/api/faq/').subscribe( (res: any) => {
      this.faqs = res
    })
  }

}
