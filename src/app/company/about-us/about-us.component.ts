import { Component, OnInit } from '@angular/core';
import { HttpServicesService } from 'src/app/services/http-services.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor(private http: HttpServicesService) { }

  ourTeam;
  apiUrl = environment.apiUrl;
  LogInModalOpen = false;



  ngOnInit() {
    this.http.ourTeam('/jv-scan/api/team/').subscribe((res: any) => {
      this.ourTeam = res
    })
  }

  backDropClicked(e: boolean) {
    this.LogInModalOpen = e
  }

  openModal() {
    this.LogInModalOpen = true;
  }

}
