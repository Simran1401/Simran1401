import { Component, OnInit } from '@angular/core';
import { HttpServicesService } from 'src/app/services/http-services.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home-section-one',
  templateUrl: './home-section-one.component.html',
  styleUrls: ['./home-section-one.component.css']
})
export class HomeSectionOneComponent implements OnInit {

  constructor( private http: HttpServicesService) { }

  title: string;
  imageOne: string;
  imageTwo: string;

  LogInModalOpen = false;
  title2
  apiUrl = environment.apiUrl

  ngOnInit() {
    this.http.homeBanner('/jv-scan/api/home_banner/').subscribe( (res: any) => {

      this.title = res.Title1;
      this.title2 = res.Title2
      this.imageOne = res.Image1;
      this.imageTwo = res.Image2

    })
  }

  backDropClicked(e: boolean) {
    this.LogInModalOpen = e;
  }


  openLogInmModal() {
    this.LogInModalOpen = true;
  }


}
