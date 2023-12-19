import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { addressService } from 'src/app/services/addresses';
import { HttpServicesService } from 'src/app/services/http-services.service';

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.css']
})
export class AddressesComponent implements OnInit {

  constructor(private addressService: addressService, private http: HttpServicesService) { }

  addressForm: FormGroup;

  addressesList

  errorText

  FormIsVisible: boolean;

  editing

  addressId

  indexAddress

  success

  ngOnInit() {

    this.editing = false;

    this.success = false

    this.FormIsVisible = false

    this.addressService.addressList.subscribe(() => {

      this.addressService.newAddress.subscribe(newAdd => {
        this.addressesList.unshift(newAdd)
      })


      this.addressService.getAddress('/jv-scan/api/myaddress/').subscribe(res => {
        this.addressesList = res
        console.log(this.addressesList)
      })

      this.errorText = false;

      if (localStorage.getItem('addresses') == '[null]') {

        this.addressesList = []
        localStorage.setItem('addresses', JSON.stringify(this.addressesList))

      } else {
        // this.addressesList = JSON.parse(localStorage.getItem('addresses'));
      }
    })

    this.addressForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      address: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      city: new FormControl(null, Validators.required),
      state: new FormControl(null, Validators.required),
      phone: new FormControl(null, [Validators.required, Validators.minLength(10), Validators.maxLength(12)]),
      postcode: new FormControl(null, Validators.required)
    })
  }

  openTheForm() {
    this.FormIsVisible = true;
    this.editing = false;
  }

  addToLocalStorage() {

    if (this.addressForm.valid) {
      this.addressService.addAddress(this.addressForm.value);
      this.http.checkOutCall('/jv-scan/api/checkout/', this.addressForm.value).subscribe(res => {
        console.log(res);
      })
      this.addressForm.reset()
      this.FormIsVisible = false
    } else {
      this.errorText = true
      null
    }

  }

  removeAddress(address, index) {
    // this.addressService.removeAddress(index)

    this.http.deleteAddress('/jv-scan/api/checkout_delete/?address_id='+`${address.id}`).subscribe(res => {
      console.log(res);
    })
      this.addressesList.splice(index, 1)

  }


  editAddress(address, i) {
    this.addressId = address.id

    this.FormIsVisible = true;
    this.editing = true
    this.addressForm = new FormGroup({
      name: new FormControl(address.name, Validators.required),
      address: new FormControl(address.address, Validators.required),
      email: new FormControl(address.email, [Validators.required, Validators.email]),
      city: new FormControl(address.city, Validators.required),
      state: new FormControl(address.state, Validators.required),
      phone: new FormControl(address.phone, [Validators.required, Validators.minLength(10), Validators.maxLength(12)]),
      postcode: new FormControl(address.postcode, Validators.required)
    })
  }


  saveChanges() {
    let data = {
      name: this.addressForm.controls['name'].value,
      address: this.addressForm.controls['address'].value,
      email: this.addressForm.controls['email'].value,
      city: this.addressForm.controls['city'].value,
      state: this.addressForm.controls['state'].value,
      phone: this.addressForm.controls['phone'].value,
      postcode: this.addressForm.controls['postcode'].value,
      address_id: this.addressId
    }


    this.http.checkOutCallForEdit('/jv-scan/api/checkout/', data).subscribe((res: any) => {
      this.success = res.status
      console.log(res);

    })

  }


}
