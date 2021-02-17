import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {JwtHelperService} from '@auth0/angular-jwt';
import {ActivatedRoute, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {



  constructor(private http: HttpClient, private route: Router,
              private router: ActivatedRoute) { }

  urlSignIn = 'http://127.0.0.1:8000/api/login';

  redirect(){
    const redirectUrl= this.router.snapshot.queryParams['redirectUrl'] || '/users'
    this.route.navigate([redirectUrl])
  }

  loggedIn(){
    return !!localStorage.getItem('token');
  }

  loggOut(){
    localStorage.removeItem('token');
    localStorage.removeItem('info');
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

  setUserInfo(info:any){
    localStorage.setItem('info', JSON.stringify(info));
  }
 getUserInfo(){
    return JSON.parse( <string> localStorage.getItem('info'));
  }

  helper = new JwtHelperService();

  decodeToken(token: string){
    return this.helper.decodeToken(token);
  }
}
