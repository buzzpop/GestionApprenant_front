import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {ProfilService} from '../../services/profil.service';
import {UserModel} from '../../models/user.model';

@Component({
  selector: 'app-users-profil',
  templateUrl: './users-profil.component.html',
  styleUrls: ['./users-profil.component.css']
})
export class UsersProfilComponent implements OnInit {

  usersProfil: UserModel[]=[]

  constructor(private profilService: ProfilService ,private router: ActivatedRoute) { }

  ngOnInit(): void {

    this.router.params.subscribe(
      (params:Params)=>{
       const id = + params['id']

        this.profilService.usersProfil(id).subscribe(
          response => {
            this.usersProfil=[]
            // @ts-ignore
            for (let u of response['hydra:member']){
              const  user = new UserModel()
              user.deserialize(u)
              this.usersProfil.push(user)
            }
            // @ts-ignore
            console.log(response['hydra:member'])

          }
          ,
          error => console.log('Error '+ error)

        )
      }
    )

  }

}
