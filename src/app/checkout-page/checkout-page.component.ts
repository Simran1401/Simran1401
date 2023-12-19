import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css']
})
export class CheckoutPageComponent implements OnInit {


  @ViewChild('firstCircle', {static: true}) firstCircle: ElementRef;
  @ViewChild('secondCircle', {static: true}) secondCircle: ElementRef;
  @ViewChild('thirdCircle', {static: true}) thirdCircle: ElementRef;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {    this.router.events.subscribe( (change) => {
    if (this.activatedRoute.children[0].url['_value'][0].path == 'delivery-page') {
      this.firstCircle.nativeElement.style.backgroundColor = '#690661'
      this.firstCircle.nativeElement.style.color = 'white'
      this.secondCircle.nativeElement.style.backgroundColor = ''
      this.secondCircle.nativeElement.style.color = ''
      this.thirdCircle.nativeElement.style.backgroundColor = ''
      this.thirdCircle.nativeElement.style.color = ''
    }
    if (this.activatedRoute.children[0].url['_value'][0].path == 'payment-method') {
      this.secondCircle.nativeElement.style.backgroundColor = '#690661'
      this.secondCircle.nativeElement.style.color = 'white'
      this.firstCircle.nativeElement.style.backgroundColor = '#690661'
      this.firstCircle.nativeElement.style.color = 'white'
      this.thirdCircle.nativeElement.style.backgroundColor = ''
      this.thirdCircle.nativeElement.style.color = ''
    }
    if (this.activatedRoute.children[0].url['_value'][0].path == 'place-order') {
      this.thirdCircle.nativeElement.style.backgroundColor = '#690661'
      this.thirdCircle.nativeElement.style.color = 'white'
      this.secondCircle.nativeElement.style.backgroundColor = '#690661'
      this.secondCircle.nativeElement.style.color = 'white'
      this.firstCircle.nativeElement.style.backgroundColor = '#690661'
      this.firstCircle.nativeElement.style.color = 'white'
    }
  })}

  ngOnInit() {
  }

}
