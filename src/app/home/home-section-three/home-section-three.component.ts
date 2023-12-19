import { Component, OnInit } from '@angular/core';
import { HttpServicesService } from 'src/app/services/http-services.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home-section-three',
  templateUrl: './home-section-three.component.html',
  styleUrls: ['./home-section-three.component.css']
})
export class HomeSectionThreeComponent implements OnInit {

  constructor(private http: HttpServicesService) { }

  diagnosticsItems;
  apiUrl = environment.apiUrl;

  ngOnInit() {
    this.http.diagnostic('/jv-scan/api/diagnostics/').subscribe((res: any) => {
      this.diagnosticsItems = res;
    })
  }

}
