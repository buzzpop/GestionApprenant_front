import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Data} from '@angular/router';
import {FormControl, FormGroup, NgModel, Validators} from '@angular/forms';
import {ProfilSortieService} from '../../services/profil-sortie.service';

@Component({
  selector: 'app-edit-profil-sortie',
  templateUrl: './edit-profil-sortie.component.html',
  styleUrls: ['./edit-profil-sortie.component.css', '../../users/add-user/add-user.component.css']
})
export class EditProfilSortieComponent implements OnInit {
  profilSortieToEdit:any
  form: any

  constructor(private route: ActivatedRoute, private profilSortieService: ProfilSortieService) { }

  ngOnInit(): void {
    this.form = <FormGroup> new FormGroup(
      {
        libelle: new FormControl('',Validators.required)
      }
    )
    this.route.data.subscribe(
      (data:Data)=>{
        this.profilSortieToEdit = data['profilSortie']
        console.log(this.profilSortieToEdit)
        this.form.controls['libelle'].setValue(this.profilSortieToEdit.libelle);
      }
    )
  }

  onSubmit() {
    this.profilSortieService.editProfilSortie(this.form.value, this.profilSortieToEdit.id).subscribe(
      (profilSortie)=>{
        console.log(profilSortie)
      },
      error => console.log(error)
    )
  }
}
