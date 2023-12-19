import { Component, OnInit } from '@angular/core';
import { HttpServicesService } from 'src/app/services/http-services.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-workshop-access-programs',
  templateUrl: './workshop-access-programs.component.html',
  styleUrls: ['./workshop-access-programs.component.css']
})
export class WorkshopAccessProgramsComponent implements OnInit {

  constructor( private http: HttpServicesService) { }

  allProgramme;

  apiUrl = environment.apiUrl;

  SmLinks

  ngOnInit() {
    this.http.allProgramme('/jv-scan/api/all_programs/').subscribe( res => {
      this.allProgramme = res
    })

    this.http.socialMediaLinks('/jv-scan/api/links/').subscribe( res => {
      this.SmLinks = res
    })
  }

}
