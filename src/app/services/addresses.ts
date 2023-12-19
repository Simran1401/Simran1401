import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })

export class addressService {



  private apiURL = environment.apiUrl;



  newAddress = new Subject()

  addressList = new BehaviorSubject(null);
  rmAddress = new BehaviorSubject(null);

  constructor(private http: HttpClient) { }

  addAddress(address) {

    this.newAddress.next(address)

    // let addresses = []

    // if (JSON.parse(localStorage.getItem('addresses'))) {

    //   addresses = JSON.parse(localStorage.getItem('addresses'))

    //   let data = {
    //     'address': address.address,
    //     'city': address.city,
    //     'state': address.state,
    //     'pincode': address.pincode,
    //     'country': address.country,
    //   }
    //   addresses.push(data)
    // } else {

    //   let data = {
    //     'address': address.address,
    //     'city': address.city,
    //     'state': address.state,
    //     'pincode': address.pincode,
    //     'country': address.country,
    //   }
    //   addresses.push(data)
    // }
    // localStorage.setItem('addresses', JSON.stringify(addresses))

    // this.addressList.next(null);
    // this.rmAddress.next(null)
  }

  getAddress(route) {
    return this.http.get(`${this.apiURL}${route}`, {
      headers: new HttpHeaders({
        'Authorization': 'Token ' + localStorage.getItem('userToken')
      })
    })
  }


  removeAddress(index) {
    let addresses = JSON.parse(localStorage.getItem('addresses'))
    delete addresses[index];
    console.log(addresses)

    localStorage.setItem('addresses', JSON.stringify(addresses));

    this.rmAddress.next(null)
    this.addressList.next(null);
  }


}
