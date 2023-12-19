import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { paymentAddData } from 'src/app/modals/paymentModal';
import { cartService } from 'src/app/services/addToCart';
import { HttpServicesService } from 'src/app/services/http-services.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent implements OnInit {

    constructor(private apiServ: HttpServicesService, private cartServ: cartService, private router: Router, private route: ActivatedRoute
    ) { }

  orderPlace;
  productsIncart;

  address;

  errorText = false;

  total

  cartThings = [];

  paymentMethod;

  apiUrl = environment.apiUrl


  ngOnInit() {

    this.orderPlace = false

    this.cartServ.userPaymentWay.pipe(take(1)).subscribe(res => {
      this.paymentMethod = res
    })

    this.cartServ.onAddToCart.subscribe(() => {

      this.productsIncart = Object.values(JSON.parse(localStorage.getItem('cart')))

      this.address = JSON.parse(localStorage.getItem('addressToDelivery'))

      let total = 0;
      let TotalDiscount = 0;

      this.productsIncart.map(res => {
        total = total + +res.price * +res.quantity
        TotalDiscount = TotalDiscount + (+res.discount * +res.price / 100)
      })
      this.total = total - TotalDiscount

      if (this.productsIncart.length <= 0) {
        this.errorText = true
      }

    })

  }

  decreaseValue(p) {
    p.quantity <= 0 ? this.cartServ.removeItemFromCart(p) : this.cartServ.decrease(p);
  }

  increaseValue(p) {
    this.cartServ.increase(p);
  }


  amount: any;
  key: any;

  placeOrder() {
    Object.values(JSON.parse(localStorage.getItem('cart'))).map(prod => {
      let cartstuff = { 'product': prod['id'], 'qty': prod['quantity'] }
      this.cartThings.push(cartstuff)
    })
    var data = {
      cart: JSON.stringify(this.cartThings),
      payment_type: this.paymentMethod,
      address_id: this.address.id
    }

    this.apiServ.orderPlaced('/jv-scan/api/order/', data).subscribe((res: any) => {

      this.amount = res.amount;
      this.key = res.razorpay_merchant_key;

      if (data.payment_type == 'cod') {
        this.cartServ.emptyTheCart()
        this.router.navigate(['/profile/orders'])
      }
      if (data.payment_type == 'online') {
        this.payWithRazor(res.razorpay_order_id);
      }
    })
    this.orderPlace = true;
  }


  userAddress = JSON.parse(localStorage.getItem('addressToDelivery'))

  paymentId: any;
  signature_id: any;
  order_id: any;
  payment: any;



  payWithRazor(val) {
    const options: any = {
      key: this.key,
      amount: this.amount, // amount should be in paise format to display Rs 1255 without decimal point
      currency: 'INR',
      name: 'Bharat Mats', // company name or product name
      description: 'Bharat Mats Transactions',  // product description
      image: '../../assets/images/header_images/logo.png', // company logo or product image
      order_id: val, // order_id created by you in backend
      modal: {
        // We should prevent closing of the form when esc key is pressed.
        escape: false,
      },
      'prefill': {
        'contact': this.userAddress.phone,
        'email': '',
        'name': this.userAddress.name,
      },
      theme: {
        color: '#0c238a'
      }
    };


    options.handler = ((response, error) => {
      options.response = response;
      console.log(response, 'RESPONSE PAYMENT HANDLER');
      // call your backend api to verify payment signature & capture transaction
      this.paymentId = response.razorpay_payment_id;
      this.signature_id = response.razorpay_signature;
      this.order_id = response.razorpay_order_id;
      console.log(`payment id ${this.paymentId.toString()} ${'\n'} orderid ${this.order_id.toString()} ${'\n'} signature ${this.signature_id.toString()}`);

      var paymentDetails = new paymentAddData();
      paymentDetails.razorpay_order_id = this.order_id;
      paymentDetails.razorpay_payment_id = this.paymentId;
      paymentDetails.razorpay_signature = this.signature_id;

      this.apiServ.paymentSteps('/api/payment_check/', paymentDetails).subscribe(res => {
        console.log('payment order details', res);
        this.payment = res;
        if (this.payment.message == "Payment Successful") {
          console.log('payment succesfull');
          this.router.navigate(['/order-placed-successfully'], { relativeTo: this.route }).then(() => {
            //remove cart from localstorage when order success
            localStorage.removeItem('cart');
            localStorage.removeItem('rzp_checkout_user_id');
            localStorage.removeItem('rzp_checkout_anon_id')
            window.location.reload();
          });
        } else {
          console.log('something went wrong');
        }
      })
    });
    options.modal.ondismiss = (() => {
      // handle the case when user closes the form while transaction is in progress
      console.log('Transaction cancelled.');
    });
    const rzp = new this.cartServ.nativeWindow.Razorpay(options);
    rzp.open();
  }




  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {

    if (this.orderPlace) {
      return true
    } else {

      return confirm('You have not placed your order')

    }

  }
}
