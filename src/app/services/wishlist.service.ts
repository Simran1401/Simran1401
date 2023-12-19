import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { productModal } from '../modals/product.modal';

@Injectable({
  providedIn: 'root',
})
export class WishlistService {

  public sendProductToWishList = new BehaviorSubject<productModal>(null)
  public removeProductFromWishlist = new BehaviorSubject<productModal>(null)

  constructor() { }


  sendTowishList(product, prodQuant) {
    let wishlist = {}
    if (JSON.parse(localStorage.getItem("wishlist"))) {
      wishlist = JSON.parse(localStorage.getItem("wishlist"));
      let data = {
        'id': product.id,
        'name': product.title,
        'price': product.price,
        'image': product.image,
        'description': product.description,
        'discount': product.discount_price,
        'category': product.category.id,
        'quantity': prodQuant
      };
      wishlist[product.id] = data
    } else {
      let data = {
        'id': product.id,
        'name': product.title,
        'price': product.price,
        'image': product.image,
        'description': product.description,
        'discount': product.discount_price,
        'category': product.category.id,
        'quantity': prodQuant
      };
      wishlist[product.id] = data
    }
    localStorage.setItem('wishlist', JSON.stringify(wishlist))
    this.sendProductToWishList.next(null)
    this.removeProductFromWishlist.next(null)
  }

  removeWishlistProduct(value) {
    let wishList = JSON.parse(localStorage.getItem('wishlist'))
    delete wishList[value.id];

    localStorage.setItem('wishlist', JSON.stringify(wishList))
    this.removeProductFromWishlist.next(null);
    this.sendProductToWishList.next(null);
  }
}
