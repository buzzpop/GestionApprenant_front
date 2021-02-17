import { Component, OnInit } from '@angular/core';
import {ProfilSortieService} from '../../services/profil-sortie.service';
import {Profil} from '../../models/Profil';

@Component({
  selector: 'app-list-profil-sortie',
  templateUrl: './list-profil-sortie.component.html',
  styleUrls: ['./list-profil-sortie.component.css','../../users/list-users/list-users.component.css']
})
export class ListProfilSortieComponent implements OnInit {
  profilSortie: any=[]
  p= 1;
  search:any

  constructor(private profilSortieService: ProfilSortieService) { }

  ngOnInit(): void {
    this.profilSortieService.refresh.subscribe(
      ()=>{
        this.profilSortie=[];
        this.getProfilSorties()
      }
    )
    this.getProfilSorties()
  }

  getProfilSorties(){
    this.profilSortieService.getProfilSortie().subscribe(
      (response)=>{
        // @ts-ignore
        for (let pS of response['hydra:member']){
          const profilS = new  Profil()
          profilS.deserialize(pS)
          this.profilSortie.push(profilS)
        }
        console.log(this.profilSortie)
      }
    )
  }

  clickMethod(id:any) {
    if(confirm("Etes-vous sure de vouloir supprimer?")) {
      this.profilSortieService.archiveProfilSortie(id).subscribe(
        success=>{console.log(success)
          alert('Sppression réussie')
        },
        error => console.log(error)
      )
    }
  }

}
