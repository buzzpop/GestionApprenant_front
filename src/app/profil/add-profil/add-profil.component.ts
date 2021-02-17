import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Profil} from '../../models/Profil';
import {ProfilService} from '../../services/profil.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-add-profil',
  templateUrl: './add-profil.component.html',
  styleUrls: ['./add-profil.component.css', '../../users/add-user/add-user.component.css']
})
export class AddProfilComponent implements OnInit {
  @ViewChild('profilElement') public profilForm: any
  id: any
  errors: any;

  constructor(private profilService: ProfilService, private router: ActivatedRoute,
              private route: Router) { }

  ngOnInit(): void {
    // @ts-ignore
   this.router.paramMap.subscribe(
      params=>{
        this.id= params.get('id');
        if (this.id){
          this.profilService.findProfilById(+this.id).subscribe(
            (data:any)=>{
              console.log(data);
             <NgForm> this.profilForm.controls.libelle.setValue( data.libelle);
              console.log(  this.profilForm.controls.libelle.value );
            }
          )
        }
      }
    )

  }

  onSubmit(profilForm:NgForm) {
    const profil = new  Profil()
    profil.deserialize(profilForm)
    if (!this.id){
      this.profilService.postProfil(profil).subscribe(
        (response)=>{
          console.log(response)
          this.route.navigate(['/profils'])
        },
        (e)=>{
          this.errors= e.error
          console.log(e.error['hydra:description'])
          setTimeout(()=>{
            this.errors=null
          },2000)
        }
      )
    }
    else {
      this.profilService.editProfil(profil, +this.id).subscribe(
        (response)=>{
          console.log(response)
        },
        (e)=>{
          console.log(e)
          this.errors= e.error
          setTimeout(()=>{
            this.errors=null
          },2000)
        }
      )
    }
  }
}
