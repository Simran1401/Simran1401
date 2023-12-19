import { Component, OnInit } from '@angular/core';
import { HttpServicesService } from 'src/app/services/http-services.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home-section-five',
  templateUrl: './home-section-five.component.html',
  styleUrls: ['./home-section-five.component.css']
})
export class HomeSectionFiveComponent implements OnInit {

  constructor(private http: HttpServicesService) { }

  features;
  apiUrl = environment.apiUrl;
  mobileData;
  ngOnInit() {
    this.http.features('/jv-scan/api/features/').subscribe(res => {
      this.features = res;
    })
    this.mobilePhone()
  }

  mobilePhone(){
    this.http.features('/jv-scan/api/mobile_phone_app/').subscribe(res=>{
      this.mobileData=res;
    })
  }
}
