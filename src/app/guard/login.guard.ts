import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthentificationService} from '../services/authentification.service';


@Injectable({
  providedIn: 'root'
})

export class LoginGuard implements  CanActivate, CanActivateChild{
  constructor(private authS: AuthentificationService,
              private route: Router) {
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>| boolean{

    const token= this.authS.loggedIn();
    if (token){

      return true;
    }


    this.route.navigate(['/authentification'], {queryParams:{redirectUrl: state.url}});
    return false;
  }


  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean{
    return this.canActivate(childRoute, state);
  }

}
