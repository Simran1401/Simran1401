import { Component, OnInit } from '@angular/core';
import { HttpServicesService } from 'src/app/services/http-services.service';

@Component({
  selector: 'app-workshop-access-menu',
  templateUrl: './workshop-access-menu.component.html',
  styleUrls: ['./workshop-access-menu.component.css']
})
export class WorkshopAccessMenuComponent implements OnInit {

  constructor( private http: HttpServicesService) { }

  categories;

  ngOnInit() {
    this.http.program_categories('/jv-scan/api/program_category/').subscribe( res => {

      this.categories = res
      console.log(res);

    })
  }

}
