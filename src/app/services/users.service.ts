import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserModel} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private env= environment.apiUrl

  constructor( private http: HttpClient) { }


  findAllUser(){

    return this.http.get(this.env+'/admin/users?isArchived=false')
  }

  postUser(credentials: FormData){

    return this.http.post(this.env+'/admin/users',credentials)
  }

  editUser(body:any,id:number){
    return this.http.post(this.env+`/admin/users/${id}?_method=PUT`,body)
  }

  archiveUser(id:number){

    return this.http.delete(this.env+`/admin/users/${id}`)
  }
  getUserById(id:number){
    return this.http.get(this.env+`/admin/users/${id}`)
  }

  form: FormGroup = new FormGroup({
    $id:new  FormControl(''),
    firstname: new FormControl(null,Validators.required),
    lastname: new FormControl(null,Validators.required),
    email: new FormControl(null,Validators.email),
    password: new FormControl(null,[Validators.required,Validators.minLength(6)]),
    profil: new FormControl(null,Validators.required),
    tel: new FormControl(null,[Validators.required,
      Validators.minLength(9),Validators.maxLength(9)]),
    address: new FormControl(null,Validators.required),
    avatar: new FormControl(null,Validators.required),
  });

  fillFields(user:UserModel){
    this.form.controls.$id.setValue(user.id)
    this.form.controls['lastname'].setValue(user.lastname);
    this.form.controls['firstname'].setValue(user.firstname);
    this.form.controls['email'].setValue(user.email);
    this.form.controls['profil'].setValue(user.profil.id);
    this.form.controls['tel'].setValue(user.tel);
    this.form.controls['address'].setValue(user.address);
  }

}
