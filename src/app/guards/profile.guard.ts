import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpServicesService } from '../services/http-services.service';

@Injectable({ providedIn: 'root' })
export class profileGuard implements CanActivate {
    constructor(private httpServ: HttpServicesService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return this.httpServ.User.pipe(
            map(user => {
                console.log(user);
                const isAuth = !!user;
                if (isAuth) {
                    return true
                }
                  this.router.navigate(['/home'])
                  return false;
            })
        )
    }
}
