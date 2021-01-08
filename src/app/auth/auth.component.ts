import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from '../services/authentification.service';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css', '../users/add-user/add-user.component.css'],
})
export class AuthComponent implements OnInit {
  sign: FormGroup | undefined

  constructor(private authentificationService: AuthentificationService, private route: Router) {
  }


  ngOnInit(): void {

  }

  onSubmit(credentials:NgForm): void {
     this.authentificationService.signIn(credentials).subscribe(
       (response)=>{
         // @ts-ignore
         const token= response['token']
       const decodeToken= this.authentificationService.decodeToken(token)
         console.log(decodeToken);
         if (!decodeToken.archived){
           this.authentificationService.setItem(token)
           this.route.navigate(['/users'])
         }else {
           console.log('vous avez été archivé');
         }
       }
     );

  }

}
