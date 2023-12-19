import { Component, OnInit } from '@angular/core';
import { HttpServicesService } from 'src/app/services/http-services.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home-section-six',
  templateUrl: './home-section-six.component.html',
  styleUrls: ['./home-section-six.component.css']
})
export class HomeSectionSixComponent implements OnInit {

  constructor( private http: HttpServicesService) { }

  testimonials;
  apiUrl = environment.apiUrl

  ngOnInit() {

    this.http.testimonials('/jv-scan/api/testimonials/').subscribe( (res: any) => {
      this.testimonials = res
    })

  }

}
