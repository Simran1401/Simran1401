import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


// razorpay
function _window(): any {
  return window;
}


@Injectable({ providedIn: 'root' })



export class cartService {


  //razorpay
  get nativeWindow(): any {
    return _window();
  }


  constructor() { }
  onAddToCart = new BehaviorSubject(null);
  onremove = new BehaviorSubject(null);
  increaseQuant = new BehaviorSubject(null);
  decreaseQuant = new BehaviorSubject(null)

  public userPaymentWay = new BehaviorSubject<any>(null);


  addToCart(product, prodQuant) {
    let cart = {}
    if (JSON.parse(localStorage.getItem('cart'))) {
      cart = JSON.parse(localStorage.getItem('cart'));
      let data = {
        'id': product.id,
        'name': product.title,
        'price': product.price,
        'image': product.image,
        'description': product.description,
        'discount': product.discount_price,
        'quantity': prodQuant
      };
      cart[product.id] = data;
    } else {
      let data = {
        'id': product.id,
        'name': product.title,
        'price': product.price,
        'image': product.image,
        'description': product.description,
        'discount': product.discount_price,
        'quantity': prodQuant
      };
      cart[product.id] = data
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    this.onAddToCart.next(null);
    this.onremove.next(null);
    this.increaseQuant.next(null);
    this.decreaseQuant.next(null)
  }

  emptyTheCart() {
    let cart = {}

    cart = JSON.parse(localStorage.getItem('cart'));

    let data = {}

    cart = data

    localStorage.setItem('cart', JSON.stringify(cart));
    this.onAddToCart.next(null);
    this.onremove.next(null);
    this.increaseQuant.next(null);
    this.decreaseQuant.next(null)

  }

  removeItemFromCart(value) {
    let cart = JSON.parse(localStorage.getItem('cart'));
    delete cart[value.id]

    localStorage.setItem('cart', JSON.stringify(cart));
    this.onAddToCart.next(null);
    this.onremove.next(null);
    this.increaseQuant.next(null);
    this.decreaseQuant.next(null)
  }


  increase(value) {
    let cartProd = JSON.parse(localStorage.getItem("cart"));
    let data = value.quantity += 1;
    cartProd[value.id]['quantity'] = data;

    localStorage.setItem("cart", JSON.stringify(cartProd));

    this.onAddToCart.next(null);
    this.onremove.next(null);
    this.increaseQuant.next(null);
    this.decreaseQuant.next(null)
  }

  decrease(value) {
    let cartProd = JSON.parse(localStorage.getItem("cart"));
    if (value.quantity <= 1) {
      this.removeItemFromCart(value)
    } else {
      let data = value.quantity -= 1;
      cartProd[value.id]['quantity'] = data;

      localStorage.setItem("cart", JSON.stringify(cartProd));
    }
    this.onAddToCart.next(null);
    this.onremove.next(null);
    this.increaseQuant.next(null);
    this.decreaseQuant.next(null)
  }

}
