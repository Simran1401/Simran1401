import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { cartService } from '../services/addToCart';

@Injectable({ providedIn: 'root' })
export class checkOutguard implements CanActivate {
  constructor( private router: Router, private cartServ: cartService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    return this.cartServ.userPaymentWay.pipe(
      map(user => {
        console.log(user);
        const modeSelected = user;
        if (modeSelected == null) {
          this.router.navigate(['/cart'])
          alert('You have to place your order in one go without refreshing the page')
          return false
        } else {
          return true
        }
      })
    )
  }
}
