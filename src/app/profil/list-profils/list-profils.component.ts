import { Component, OnInit } from '@angular/core';
import {Profil} from '../../models/Profil';
import {ProfilService} from '../../services/profil.service';

@Component({
  selector: 'app-list-profils',
  templateUrl: './list-profils.component.html',
  styleUrls: ['./list-profils.component.css']
})
export class ListProfilsComponent implements OnInit {
  profils: any=[]

  constructor(private profilService: ProfilService) { }

  ngOnInit(): void {
    this.profilService.findAllProfil().subscribe(
      response=>{
        // @ts-ignore
        for (let p of response){
          const profil= new Profil()
          profil.deserialize(p)
          this.profils.push(profil)
        }

        console.log(this.profils)
        console.log(this.profils.length)
      },
      error => {
        console.log(error)
      }
    )
  }

  clickMethod(id:any) {
    if(confirm("Etes-vous sure de vouloir supprimer?")) {
      this.profilService.archiveProfil(id).subscribe(
        success=>{console.log(success)
          alert('Sppression réussie')
        },
        error => console.log(error)
      )
    }
  }

}
