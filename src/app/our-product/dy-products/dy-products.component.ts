import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { cartService } from 'src/app/services/addToCart';
import { HttpServicesService } from 'src/app/services/http-services.service';
import { WishlistService } from 'src/app/services/wishlist.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-dy-products',
  templateUrl: './dy-products.component.html',
  styleUrls: ['./dy-products.component.css']
})
export class DyProductsComponent implements OnInit {

  ProductList;
  prodQuant: number = 1;

  addToWishList;
  cartList;

  apiUrl = environment.apiUrl;


  constructor(
    private wishListServ: WishlistService,
    private cartServ: cartService,
    private http: HttpServicesService,
    private route: ActivatedRoute
  ) { }

  LogInModalOpen = false;

  id;

  ngOnInit() {

    this.id = this.route.params['_value'].id

    this.http.productCategories('/jv-scan/api/productbycategory/?cateogry_id=' + `${this.id}`).subscribe(res => {

      this.ProductList = res;
      console.log(res);

    })

    this.wishListServ.sendProductToWishList.subscribe(() => {
      if (localStorage.getItem('wishlist')) {
        this.addToWishList = JSON.parse(localStorage.getItem('wishlist'))
      } else {
        this.addToWishList = false
      }
    })

    this.cartServ.onAddToCart.subscribe(() => {
      if (localStorage.getItem('cart')) {
        this.cartList = JSON.parse(localStorage.getItem('cart'))
      } else {
        this.cartList = false
      }
    })
  }

  sendToWishList(product) {
    this.wishListServ.sendTowishList(product, this.prodQuant);
  }

  removeProd(product) {
    this.wishListServ.removeWishlistProduct(product)
  }

  sendToCart(product) {
    this.cartServ.addToCart(product, this.prodQuant)
  }

  removeItemFromCart(product) {
    this.cartServ.removeItemFromCart(product)
  }

  backDropClicked(e: boolean) {
    this.LogInModalOpen = e;
  }

  openModal() {
    this.LogInModalOpen = true
  }

}
