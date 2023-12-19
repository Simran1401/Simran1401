import { Component, OnInit } from '@angular/core';
import { cartService } from 'src/app/services/addToCart';
import { Router ,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.component.html',
  styleUrls: ['./payment-method.component.css']
})
export class PaymentMethodComponent implements OnInit {

  constructor(private cartServ: cartService, private router: Router, private route: ActivatedRoute) { }


  ngOnInit() {
    this.cartServ.userPaymentWay.next('online')
  }

  onlineSelected(online) {

    if (online.checked) {
      this.cartServ.userPaymentWay.next('online')
    }

  }

  codSelected(cod) {

    if (cod.checked) {
      this.cartServ.userPaymentWay.next('cod')
    }
  }
  navigatePlaceOrder(){
    this.router.navigate(['../place-order'], { relativeTo: this.route })
  }

}
