import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Profil} from '../../models/Profil';
import {ProfilSortieService} from '../../services/profil-sortie.service';

@Component({
  selector: 'app-add-profil-sortie',
  templateUrl: './add-profil-sortie.component.html',
  styleUrls: ['./add-profil-sortie.component.css', '../../users/add-user/add-user.component.css']
})
export class AddProfilSortieComponent implements OnInit {

  constructor(private profilSortie: ProfilSortieService) { }

  ngOnInit(): void {
  }

  onSubmit(profilForm:NgForm) {
    const profilS = new  Profil()
    profilS.deserialize(profilForm)
    console.log(profilS);
    this.profilSortie.postProfilSortie(profilS).subscribe(
      (response)=>{
        console.log(response)
      },
      (error)=>{
        console.log(error)
      }
    )

  }

}
