import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { cartService } from '../services/addToCart';
import { HttpServicesService } from '../services/http-services.service';
import { WishlistService } from '../services/wishlist.service';
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  signUpModal: boolean = true;
  loginModal: boolean = false;
  logInWithNumberModal: boolean = false;
  signUpForm: FormGroup;
  logInForm: FormGroup;
  logInWithNumberForm: FormGroup;

  LogInModalOpen: boolean = false;

  errorTextOnSignUp;
  errorTextLogIn;
  successMsg;
  links: any;
  cart;
  wishlist;

  categories;

  loggedIn
  logo
  apiUrl = environment.apiUrl

  cartsss

  constructor(private http: HttpServicesService, private cartServ: cartService, private wishlistServ: WishlistService, private renderer: Renderer2,) { }

  ngOnInit() {

    // const mobileView = this.renderer.createElement('script');
    // mobileView.src = `../../assets/js/mobileView.js`;
    // this.renderer.appendChild(document.head, mobileView);

    let header = document.querySelector('#first-nav');

    let lastScroll = window.scrollY;
    window.addEventListener('scroll', () => {
      if (lastScroll < window.scrollY) {
        document
          .querySelector('#first-nav')
          ?.classList.add('nav-hidden');
      } else {
        document
          .querySelector('#first-nav')
          ?.classList.remove('nav-hidden');
      }
      lastScroll = window.scrollY;
    });

    let header1 = document.querySelector('#second-nav');

    let lastScroll1 = window.scrollY;
    window.addEventListener('scroll', () => {
      if (lastScroll1 < window.scrollY) {
        document
          .querySelector('#second-nav')
          ?.classList.add('nav-hidden');
      } else {
        document
          .querySelector('#second-nav')
          ?.classList.remove('nav-hidden');
      }
      lastScroll = window.scrollY;
    });


    this.http.socialMediaLinks('/jv-scan/api/links/').subscribe((res: any) => {
      this.links = res
    })

    this.http.productCategories('/jv-scan/api/category/').subscribe(res => {
      this.categories = res
    })

    this.http.User.subscribe(user => {
      this.loggedIn = user
    })

    if (localStorage.getItem('userToken')) {
      this.loggedIn = true;
    } else {
      this.loggedIn = false
    }

    this.cartServ.onAddToCart.subscribe(() => {
      if (localStorage.getItem('cart')) {
        this.cart = Object.values(JSON.parse(localStorage.getItem('cart')))

        let totalQuant = 0;
        this.cart.map(res => {
          totalQuant = +totalQuant + +res.quantity
        })
        this.cartsss = totalQuant
      }
    })

    this.http.getLogo('/jv-scan/api/my_icons/').subscribe(res => {
      this.logo = res
    })

    this.wishlistServ.sendProductToWishList.subscribe(() => {

      if (localStorage.getItem('userToken')) {
        this.http.dataIfLoggedIn(true)
      }
       if (localStorage.getItem('wishlist')) {
         this.wishlist = Object.values(JSON.parse(localStorage.getItem('wishlist')))
      }

    })

  }

  openModal() {
    this.LogInModalOpen = true;
  }

  backDropClicked(e: boolean) {
    this.LogInModalOpen = e;
  }

}
