import {Injectable, Injector} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthentificationService} from './authentification.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authService= this.injector.get(AuthentificationService)
    let tokenizedRequest= req.clone(
      {
        headers: req.headers.set('Authorization',`Bearer ${authService.getItem()}`)
      }
    )
    return next.handle(tokenizedRequest)
  }
}
