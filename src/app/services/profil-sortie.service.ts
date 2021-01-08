import { Injectable } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfilSortieService {

  private env= environment.apiUrl

  constructor( private http: HttpClient) { }

  getProfilSortie(){
    return this.http.get(this.env+'/admin/profil_sorties?isArchived=false')
  }

  postProfilSortie(credentials: any){

    return this.http.post(this.env+'/admin/profil_sorties',credentials)
  }

  editProfilSortie(body:any,id:number){
    return this.http.put(this.env+`/admin/profil_sorties/${id}`,body)
  }
  getProfilSortieById(id:number){
    return this.http.get(this.env+`/admin/profil_sorties/${id}`)
  }

  archiveProfilSortie(id: number) {
    return this.http.delete(this.env+`/admin/profil_sorties/${id}`)
  }
}
