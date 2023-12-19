import { Component, OnInit } from '@angular/core';
import { HttpServicesService } from '../services/http-services.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  constructor(private httpService: HttpServicesService) { }

  LogInModalOpen = false;

  public baseUrl = 'https://apijv.gftpl.in'
  ngOnInit(): void {
    this.getBlog()
  }

  backDropClicked(e: boolean) {
    this.LogInModalOpen = e;
  }

  openModal() {
    this.LogInModalOpen = true
  }

  bLogList;
  getBlog() {
    this.httpService.blogList('/jv-scan/api/blogs/').subscribe(res => {

      this.bLogList = res;
      console.log(this.bLogList, 'bloglist');

    })
  }

}
