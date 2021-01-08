import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {JwtHelperService} from '@auth0/angular-jwt';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(private http: HttpClient, private route: Router) { }

  urlSignIn = 'http://127.0.0.1:8000/api/login';

  loggedIn(){
    return !!localStorage.getItem('token');
  }

  loggOut(){
    localStorage.removeItem('token');
    this.route.navigate(['/authentification'])
  }

  signIn(credentials: any) {
    return this.http.post(this.urlSignIn, credentials);
  }

  setItem(token: string): void {
    localStorage.setItem('token', token);
  }

  getItem(): string {
    return <string> localStorage.getItem('token')
  }

  helper = new JwtHelperService();

  decodeToken(token: string){
    return this.helper.decodeToken(token);
  }

}
