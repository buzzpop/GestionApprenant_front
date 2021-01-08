import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {ProfilSortieService} from './profil-sortie.service';


@Injectable({
  providedIn: 'root'
})
export class GetUserProfilByIdresolverService implements Resolve<any>{
  profilSortie:any

  constructor(private profilSortieService: ProfilSortieService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
      this.profilSortie= this.profilSortieService.getProfilSortieById(route.params['id'])

    return this.profilSortie
  }
}
