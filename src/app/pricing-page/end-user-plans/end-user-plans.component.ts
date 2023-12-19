import { Component, OnInit } from '@angular/core';
import { HttpServicesService } from 'src/app/services/http-services.service';

@Component({
  selector: 'app-end-user-plans',
  templateUrl: './end-user-plans.component.html',
  styleUrls: ['./end-user-plans.component.css']
})
export class EndUserPlansComponent implements OnInit {


  plans

  constructor( private http: HttpServicesService ) { }

  ngOnInit(): void {

    this.http.plans('/jv-scan/api/plans/').subscribe(res => {
      this.plans = res;
    })

  }

}
