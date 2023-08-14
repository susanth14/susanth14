import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard  implements CanActivate {
  constructor(private router: Router) { }
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const storedToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXNzd29yZCI6IjEyMzQiLCJ1c2VybmFtZSI6InN1c2FudGgifQ.bCyCS9xBfbm6mbaxk22LBDnbSnZDKd3mM0pGAoaaxFQ';
    const isLoggedIn = localStorage.getItem('jwt') === storedToken;
    if (isLoggedIn) {
      return true;
    } else {
      return this.router.parseUrl('/login');
    }
  }
}