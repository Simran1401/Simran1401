import { Component, OnInit } from '@angular/core';
import { HttpServicesService } from 'src/app/services/http-services.service';

@Component({
  selector: 'app-home-section-four',
  templateUrl: './home-section-four.component.html',
  styleUrls: ['./home-section-four.component.css']
})
export class HomeSectionFourComponent implements OnInit {

  constructor(private http: HttpServicesService) { }

  appLink1;
  appLink2;
  ngOnInit() {
    this.http.appLink('/jv-scan/api/app_link/').subscribe((res: any) => {

      this.appLink1 = res;
      console.log(res);


    })
  }

}
