import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {GroupeDeCompetencesService} from './groupe-de-competences.service';

@Injectable({
  providedIn: 'root'
})
export class G_competenceResolverService implements Resolve<any>{
  g_competence:any

  constructor(private grpCompetence: GroupeDeCompetencesService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
      this.g_competence= this.grpCompetence.getG_competenceById(+route.params['id'])

    return this.g_competence
  }
}
