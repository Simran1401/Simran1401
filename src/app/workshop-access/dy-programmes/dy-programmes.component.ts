import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpServicesService } from 'src/app/services/http-services.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dy-programmes',
  templateUrl: './dy-programmes.component.html',
  styleUrls: ['./dy-programmes.component.css']
})
export class DyProgrammesComponent implements OnInit {

  constructor(private http: HttpServicesService, private route: ActivatedRoute) { }

  programme;

  apiUrl = environment.apiUrl

  id;

  ngOnInit() {


    this.route.params.subscribe((res: any) => {
      this.id = res.id

      this.http.program_by_category('/jv-scan/api/programs_by_category/?category_id=' + `${this.id}`).subscribe(res => {
        this.programme = res
        console.log(res);
      })
    })
  }

}
