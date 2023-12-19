import { Component, OnInit } from '@angular/core';
import { cartService } from '../services/addToCart';
import { WishlistService } from '../services/wishlist.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  constructor(private wishlistServ: WishlistService, private cartServ: cartService) { }

  wishlistList
  prodQuant: number = 1;

  wishListLocal
  cartListLocal

  apiUrl = environment.apiUrl

  ngOnInit() {
    this.wishlistServ.sendProductToWishList.subscribe(() => {
      try {
        if (JSON.parse(localStorage.getItem('wishlist'))) {
          this.wishlistList = Object.values(JSON.parse(localStorage.getItem("wishlist")))
          this.wishListLocal = JSON.parse(localStorage.getItem('wishlist'))
        } else {
          this.wishListLocal = false
        }
      } catch { }
    })
    this.cartServ.onAddToCart.subscribe(() => {
      if (localStorage.getItem('cart')) {
        this.cartListLocal = JSON.parse(localStorage.getItem('cart'))
      } else {
        this.cartListLocal = false
      }
    })
  }

  sendToWishList(p) {
    this.wishlistServ.sendTowishList(p, this.prodQuant);
  }

  removeProd(p) {
    this.wishlistServ.removeWishlistProduct(p)
  }

  sendToCart(p) {
    this.cartServ.addToCart(p, this.prodQuant)
  }

  removeItemFromCart(p) {
    this.cartServ.removeItemFromCart(p)
  }
}
