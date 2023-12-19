import { Component, OnInit } from '@angular/core';
import { HttpServicesService } from 'src/app/services/http-services.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home-section-two',
  templateUrl: './home-section-two.component.html',
  styleUrls: ['./home-section-two.component.css']
})
export class HomeSectionTwoComponent implements OnInit {

  constructor( private http: HttpServicesService) { }

  title: string;
  description: string;
  image: string;
  apiUrl = environment.apiUrl;

  ngOnInit() {
    this.http.sendvoice('/jv-scan/api/send_voice/').subscribe( (res: any) => {

      this.title = res.Title;
      this.description = res.Description;
      this.image = res.Image

    })
  }
}
