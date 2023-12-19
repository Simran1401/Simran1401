import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { addressService } from 'src/app/services/addresses';
import { HttpServicesService } from 'src/app/services/http-services.service';

@Component({
  selector: 'app-checkout-delivery-page',
  templateUrl: './checkout-delivery-page.component.html',
  styleUrls: ['./checkout-delivery-page.component.css']
})
export class CheckoutDeliveryPageComponent implements OnInit {


  checkOutDelivery: FormGroup;

  addresses;

  formOpen;
  errorText;

  constructor(private apiServ: HttpServicesService, private addressServ: addressService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

    this.formOpen = false


      this.addressServ.getAddress('/jv-scan/api/myaddress/').subscribe(res => {
        this.addresses = res
        console.log(res);
      })

    this.checkOutDelivery = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'address': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'city': new FormControl(null, Validators.required),
      'state': new FormControl(null, Validators.required),
      'phone': new FormControl(null, [Validators.required, Validators.minLength(10), Validators.maxLength(12)]),
      'postcode': new FormControl(null, Validators.required)
    })
  }


  openForm() {
    this.formOpen = true;

  }

  useThisAddress(address) {
    var data = {
      'id': address.id,
      'name': address.name,
      'address': address.address,
      'email': address.email,
      'city': address.city,
      'state': address.state,
      'phone': address.phone,
      'postcode': address.postcode
    }

    localStorage.setItem('addressToDelivery', JSON.stringify(data))

    this.formOpen = false;
    this.router.navigate(['../payment-method'], { relativeTo: this.route })

  }

  checkOutCall() {
    if (this.checkOutDelivery.invalid) {
      this.errorText = 'Please fill the form correctly'
      if (this.checkOutDelivery.controls['email'].errors) {
        this.errorText = 'Enter a valid email address'
      }
    } else {
      this.apiServ.checkOutCall('/jv-scan/api/checkout/', this.checkOutDelivery.value).subscribe((res: any) => {
        if (res.status == 'error') {
          this.errorText = 'Please fill the form correctly'
        } else {
          localStorage.setItem('addressToDelivery', this.checkOutDelivery.value)
          this.checkOutDelivery.reset()
          this.formOpen = false;
          this.router.navigate(['../payment-method'], { relativeTo: this.route })
        }
      })
    }
  }

}
