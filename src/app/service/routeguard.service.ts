import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { HarcodedAuthenticationService } from './harcoded-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteguardService implements CanActivate {

  constructor(private hardCodedServiceAuth:HarcodedAuthenticationService,
    private router:Router) { }
 
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
      if(this.hardCodedServiceAuth.isUserLoggedIn())
        return true;
        this.router.navigate(['login']);  
      return false;
    }
}
