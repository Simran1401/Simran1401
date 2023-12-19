import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpServicesService } from '../services/http-services.service';
import { environment } from 'src/environments/environment';
import { cartService } from '../services/addToCart';
import { WishlistService } from '../services/wishlist.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-single-product-page',
  templateUrl: './single-product-page.component.html',
  styleUrls: ['./single-product-page.component.css']
})
export class SingleProductPageComponent implements OnInit {

  addToWishList;

  constructor(private route: ActivatedRoute, private http: HttpServicesService, private cartServ: cartService, private wishListServ: WishlistService) { }

  recommendationProd;
  slideConfig = {
    "slidesToShow": 3,
    "slidesToScroll": 1,
    "nextArrow": "<svg xmlns='http://www.w3.org/2000/svg' fill='currentColor' class='bi bi-chevron-compact-right purple-arrow' style='cursor: pointer' viewBox='0 0 16 16'><path fill-rule='evenodd' d='M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z'/></svg>",
    "responsive": [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slideToScroll: 1
        }
      }
    ]

  };

  product;

  prodQuant = 1;

  apiUrl = environment.apiUrl;

  addedToList: boolean;

  ProductInCart;

  id;

  idForCat

  errorMessege

  reviewForm: FormGroup;

  exactPrice;

  ngOnInit() {


    this.reviewForm = new FormGroup({
      reviewName: new FormControl(null, Validators.required),
      reviewDesc: new FormControl(null, Validators.required)
    })


    this.route.url.subscribe(res => {
      this.id = res[2].path
      this.idForCat = res[1].path


      this.http.productCategories('/jv-scan/api/productbycategory/?cateogry_id=' + `${this.idForCat}`).subscribe(res => {
        this.recommendationProd = res;
      })
    })

    this.http.singleProd('/jv-scan/api/productdetail/?product_id=' + `${this.id}`).subscribe((prod: any) => {
      this.product = prod



    })

    this.cartServ.onAddToCart.subscribe(() => {
      try {
        if (JSON.parse(localStorage.getItem("cart"))) {
          this.ProductInCart = JSON.parse(localStorage.getItem("cart"));
        }
        if (this.ProductInCart[this.id]) {
          this.addedToList = true;
        } else {
          this.addedToList = false;
        }
      } catch { }
    })

    this.wishListServ.sendProductToWishList.subscribe(() => {
      if (localStorage.getItem('wishlist')) {
        this.addToWishList = JSON.parse(localStorage.getItem('wishlist'))
      }
      else {
        this.addToWishList = false
      }
    })



  }

  addPToCart(p) {
    let data = {
      'id': this.id,
      'title': p.title,
      'price': p.price,
      'image': p.image,
      'discount_price': +p.discount_price,
      'description': p.description,
    };
    this.cartServ.addToCart(data, this.prodQuant)
  }

  increaseValue(p) {
    this.cartServ.increase(p);
  }

  decreaseValue(p) {
    this.cartServ.decrease(p);
  }

  sendToWishList(product) {
    this.wishListServ.sendTowishList(product, this.prodQuant);
  }

  removeProd(product) {
    this.wishListServ.removeWishlistProduct(product)
  }


  onSubmit() {
    if (this.reviewForm.valid) {

      let data = {
        name: this.reviewForm.controls['reviewName'].value,
        comments: this.reviewForm.controls['reviewDesc'].value,
        product: this.id,
      }

      this.http.addReview('/jv-scan/api/review/', data).subscribe(res => {
        console.log(res);
      })
      this.reviewForm.reset();
      this.errorMessege = false
    } else {
      this.errorMessege = "Please fill every required details"
    }
  }

}
