import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Profil} from '../../models/Profil';
import {ProfilService} from '../../services/profil.service';

@Component({
  selector: 'app-add-profil',
  templateUrl: './add-profil.component.html',
  styleUrls: ['./add-profil.component.css', '../../users/add-user/add-user.component.css']
})
export class AddProfilComponent implements OnInit {

  constructor(private profilService: ProfilService) { }

  ngOnInit(): void {
  }

  onSubmit(profilForm:NgForm) {
    const profil = new  Profil()
    profil.deserialize(profilForm)
    console.log(profil);
    this.profilService.postProfil(profil).subscribe(
      (response)=>{
        console.log(response)
      },
      (error)=>{
        console.log(error)
      }
    )

  }
}
