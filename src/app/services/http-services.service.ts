import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServicesService {

  private apiURL = environment.apiUrl;



  User = new BehaviorSubject<any>(null);


  constructor(private http: HttpClient) { }



  deleteAddress(route) {
    return this.http.delete(`${this.apiURL}${route}`, {
      headers: new HttpHeaders({
        'Authorization': 'Token ' + localStorage.getItem('userToken')
      })
    })
  }




  dataIfLoggedIn(value) {
    this.User.next(value)
  }

  signUPCall(route: string, data: any) {
    return this.http.post(`${this.apiURL}${route}`, data)
  }

  signIn(route: string, data: any) {
    return this.http.post(`${this.apiURL}${route}`, data)
  }

  becomeAPractitioner(route: string, data: any) {
    return this.http.post(`${this.apiURL}${route}`, data)
  }

  checkOutCall(route: string, data: any) {
    return this.http.post(`${this.apiURL}${route}`, data, {
      headers: new HttpHeaders({
        'Authorization': 'Token ' + localStorage.getItem('userToken')
      })
    })
  }

  checkOutCallForEdit(route: string, data: any) {
    return this.http.put(`${this.apiURL}${route}`, data, {
      headers: new HttpHeaders({
        'Authorization': 'Token ' + localStorage.getItem('userToken')
      })
    })
  }


  subscribe(route: string, data: any) {
    return this.http.post(`${this.apiURL}${route}`, data)
  }

  orderPlaced(route: string, data: any) {
    return this.http.post(`${this.apiURL}${route}`, data, {
      headers: new HttpHeaders({
        'Authorization': 'Token ' + localStorage.getItem('userToken')
      })
    })
  }

  sendQuery(route, data) {
    return this.http.post(`${this.apiURL}${route}`, data)
  }


  addPersonalDetails(route, data) {
    return this.http.put(`${this.apiURL}${route}`, data, {
      headers: new HttpHeaders({
        'Authorization': 'Token ' + localStorage.getItem('userToken'),
      })
    })
  }

  addReview(route, data) {
    return this.http.post(`${this.apiURL}${route}`, data, {
      headers: new HttpHeaders({
        'Authorization': 'Token ' + localStorage.getItem('userToken'),
      })
    })
  }

  signupWithNumber(route, data) {
    return this.http.post(`${this.apiURL}${route}`, data)
  }

  paymentSteps(route, data) {
    return this.http.post(`${this.apiURL}${route}`, data, {
      headers: new HttpHeaders({
        'Authorization': 'Token ' + localStorage.getItem('userToken'),
      })
    })
  }

  logOut(route, auth) {
    this.User.next(null)
    return this.http.post(`${this.apiURL}${route}`, auth, {
      headers: new HttpHeaders({
        'Authorization': 'Token ' + localStorage.getItem('userToken')
      })
    })
  }

  homeBanner(route) {
    return this.http.get(`${this.apiURL}${route}`)
  }

  sendvoice(route) {
    return this.http.get(`${this.apiURL}${route}`)
  }

  diagnostic(route) {
    return this.http.get(`${this.apiURL}${route}`)
  }

  appLink(route) {
    return this.http.get(`${this.apiURL}${route}`)
  }

  features(route) {
    return this.http.get(`${this.apiURL}${route}`)
  }

  testimonials(route) {
    return this.http.get(`${this.apiURL}${route}`)
  }

  faqs(route) {
    return this.http.get(`${this.apiURL}${route}`)
  }

  ourTeam(route) {
    return this.http.get(`${this.apiURL}${route}`)
  }

  galleryItems(route) {
    return this.http.get(`${this.apiURL}${route}`)
  }

  socialMediaLinks(route) {
    return this.http.get(`${this.apiURL}${route}`)
  }

  singleBlog(route) {
    return this.http.get(`${this.apiURL}${route}`)
  }

  blogList(route) {
    return this.http.get(`${this.apiURL}${route}`)
  }

  plans(route) {
    return this.http.get(`${this.apiURL}${route}`)
  }

  getProducts(route) {
    return this.http.get(`${this.apiURL}${route}`)
  }

  getOrders(route) {
    return this.http.get(`${this.apiURL}${route}`, {
      headers: new HttpHeaders({
        'Authorization': 'Token ' + localStorage.getItem('userToken')
      })
    })
  }

  productCategories(route) {
    return this.http.get(`${this.apiURL}${route}`)
  }

  program_categories(route) {
    return this.http.get(`${this.apiURL}${route}`)
  }

  allProgramme(route) {
    return this.http.get(`${this.apiURL}${route}`)
  }

  program_by_category(route) {
    return this.http.get(`${this.apiURL}${route}`)
  }

  singleProd(route) {
    return this.http.get(`${this.apiURL}${route}`)
  }

  getCoupon(route) {
    return this.http.get(`${this.apiURL}${route}`, {
      headers: new HttpHeaders({
        'Authorization': 'Token ' + localStorage.getItem('userToken')
      })
    })
  }

  getPersonalDetails(route) {
    return this.http.get(`${this.apiURL}${route}`, {
      headers: new HttpHeaders({
        'Authorization': 'Token ' + localStorage.getItem('userToken')
      })
    })
  }


  getPartner(route) {
    return this.http.get(`${this.apiURL}${route}`)
  }

  getLogo(route) {
    return this.http.get(`${this.apiURL}${route}`)
  }

  // 0/jv-scan/api/partner_detail/
  getPartnerDetail() {
    let url = this.apiURL + '/jv-scan/api/partner_detail/'
    return this.http.get(url)
  }

}
