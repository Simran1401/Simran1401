import { Component, OnInit } from '@angular/core';
import { HttpServicesService } from 'src/app/services/http-services.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  Orders

  constructor(private apiServ: HttpServicesService) { }

  ngOnInit() {
    this.apiServ.getOrders('/jv-scan/api/myorder/').subscribe(res => {
      this.Orders = res
    })
  }

}
