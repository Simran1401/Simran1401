import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpServicesService } from 'src/app/services/http-services.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private http: HttpServicesService, private router: Router) { }

  ngOnInit(): void {
  }

  logOut() {
    this.http.logOut('/jv-scan/api/signout/', localStorage.getItem('userToken')).subscribe(res => {
      console.log(res);
      localStorage.removeItem('userToken')
      this.router.navigate(['/'])
    })
  }

}
