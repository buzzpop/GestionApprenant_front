import { Injectable } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfilService {

  private env= environment.apiUrl

  constructor( private http: HttpClient) { }

  findAllProfil(){
    return this.http.get(this.env+'/admin/profils?archivage=false',
      {headers:{'Accept':'application/json'}})
  }

  postProfil(credentials: any){

    return this.http.post(this.env+'/admin/profils',credentials)
  }

  usersProfil(id: number){

    return this.http.get(this.env+`/admin/profils/${id}/users`)
  }



  form: FormGroup = new FormGroup({
      $id:new  FormControl(''),
      libelle: new FormControl('',Validators.required),
    }
  )

  archiveProfil(id: number) {
    return this.http.delete(this.env+`/admin/profils/${id}`)
  }
}
