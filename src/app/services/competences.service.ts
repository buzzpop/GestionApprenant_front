import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CompetencesService {
  private env= environment.apiUrl

  constructor( private http: HttpClient) { }


  getCompetences(){

    return this.http.get(this.env+'/admin/competences?isArchived=false')
  }
 getCompetencesId(id:number){

    return this.http.get(this.env+`/admin/competences/${id}`)
  }

  postCompetences(credentials: FormData){

    return this.http.post(this.env+'/admin/competences',credentials)
  }

  editCompetences(body:any,id:number){
    return this.http.put(this.env+`/admin/competences/${id}`,body)
  }

  deleteCompetence(id:number){
    return this.http.delete(this.env+`/admin/competences/${id}`)
  }

}
