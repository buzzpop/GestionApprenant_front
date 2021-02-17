import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthentificationService} from '../services/authentification.service';
import {AddUserComponent} from '../users/add-user/add-user.component';


@Injectable({
  providedIn: 'root'
})

export class PreventGuard implements  CanDeactivate<AddUserComponent>{
  constructor() {}

  canDeactivate(component: AddUserComponent): boolean{
    if (component.addUserForm.dirty){
      return confirm("Are you sure you want to discard your changes ?")
    }
    return true;
  }


}
