import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { cartService } from '../services/addToCart';
import { HttpServicesService } from '../services/http-services.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {

  constructor(
    private cartServ: cartService,
    private http: HttpServicesService,
    private router: Router
  ) { }


  apiUrl = environment.apiUrl;
  cartItems = [];

  LogInModalOpen: boolean = false;

  subTotalPr;

  coupon

  totalProducts

  TotalDiscount

  totalPrice;

  ngOnInit() {
    this.cartServ.onAddToCart.subscribe(() => {
      try {
        if (JSON.parse(localStorage.getItem('cart'))) {
          this.cartItems = Object.values(JSON.parse(localStorage.getItem("cart")))

          let subTotal = 0;
          let totalProducts = 0;
          let TotalDiscount = 0;
          this.cartItems.map(res => {
            subTotal = subTotal + +res.price * +res.quantity;
            totalProducts = totalProducts + +res.quantity;
            TotalDiscount = TotalDiscount + (+res.discount * +res.price / 100)
          })
          this.subTotalPr = subTotal
          this.totalProducts = totalProducts
          this.TotalDiscount = TotalDiscount
          this.totalPrice = this.subTotalPr - this.TotalDiscount
        }
      } catch { }
    })

    this.http.getCoupon('/jv-scan/api/mycoupon/').subscribe( (res: any) => {
      this.coupon = res;
      console.log(res);

    })
  }

  removeProd(prod) {
    this.cartServ.removeItemFromCart(prod)
  }

  decreaseValue(prod) {
    this.cartServ.increase(prod);
  }

  increaseValue(prod) {
    this.cartServ.decrease(prod);
  }

  checkOutPage() {
    if (localStorage.getItem('userToken')) {
      this.router.navigate(['/checkout-page'])
    } else {
      this.LogInModalOpen = true;
    }
  }


  backDropClicked(e: boolean) {
    this.LogInModalOpen = e;
  }

}
