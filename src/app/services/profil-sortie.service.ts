import { Injectable } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfilSortieService {

  private env= environment.apiUrl

  constructor( private http: HttpClient) { }

  private _refresh = new Subject<any>();

  get refresh(){
    return this._refresh ;
  }


  getProfilSortie(){
    return this.http.get(this.env+'/admin/profil_sorties?isArchived=false')
  }

  postProfilSortie(credentials: any){

    return this.http.post(this.env+'/admin/profil_sorties',credentials)
      .pipe(
        tap(()=>{
          this._refresh.next();
        })
      )
  }

  editProfilSortie(body:any,id:number){
    return this.http.put(this.env+`/admin/profil_sorties/${id}`,body)
      .pipe(
        tap(()=>{
          this._refresh.next();
        })
      )
  }
  getProfilSortieById(id:number){
    return this.http.get(this.env+`/admin/profil_sorties/${id}`)
  }

  archiveProfilSortie(id: number) {
    return this.http.delete(this.env+`/admin/profil_sorties/${id}`)
      .pipe(
        tap(()=>{
          this._refresh.next();
        })
      )
  }
}
