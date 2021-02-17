import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {ProfilService} from '../../services/profil.service';
import {UsersService} from '../../services/users.service';
import {Profil} from '../../models/Profil';
import {UserModel} from '../../models/user.model';
import {ActivatedRoute, Data, Router} from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  addUserForm: FormGroup | any
  profil: any=[]
  fileToUpload: any
  imgURL:any

  constructor(private profilService: ProfilService,
              private userService: UsersService,
              private route: ActivatedRoute  , private router: Router) { }

  ngOnInit(): void {
    this.InitForm()
    console.log(this.addUserForm.get('password'));
    this.route.data.subscribe(
      (data:Data)=>{
        console.log(data['userToEdit'])
        if (data['userToEdit']){
          this.userService.fillFields(data['userToEdit'])
          if (data['userToEdit'].avatar){
            this.imgURL= 'data:image/jpg;base64,'+data['userToEdit'].avatar
          }
          this.addUserForm.get('password').clearValidators()
          this.addUserForm.get('avatar').clearValidators()

        }
      }
    )

    this.profilService.findAllProfil().subscribe(
      response=>{
        // @ts-ignore
        for (let p of response){
          const profil= new Profil()

          profil.deserialize(p)
          this.profil.push(profil)
        }
      },
      error => {
        console.log(error)
      }
    )
  }

  InitForm(){
    this.addUserForm = this.userService.form
  }

  handleFileInput(e: any) {

  this.fileToUpload = e.files.item(0)
    console.log(this.fileToUpload)

    let reader = new FileReader();

    reader.readAsDataURL(this.fileToUpload);
    reader.onload = () => {
      this.imgURL = reader.result;
      console.log(this.imgURL)
    }
  }

  onSubmitForm() {
    const formValue= this.addUserForm.value
    const user = new UserModel();
    user.deserialize(formValue)
    console.log(user)
    var formData= new FormData();
    formData.append('firstname',user.firstname);
    formData.append('lastname',user.lastname);
    formData.append('email',user.email);
    formData.append('password',user.password);
    formData.append('profil',user.profil);
    formData.append('tel',user.tel);
    formData.append('address',user.address);
    if (this.fileToUpload){
      formData.append('avatar',  this.fileToUpload);
    }

    if (!this.addUserForm.controls.$id.value){


    this.userService.postUser(formData).subscribe(
      response=>{
        console.log(response)
      },
      error => console
        .log(error)
    )
      this.imgURL=null;
    }
    else{
      this.userService.editUser(formData,this.addUserForm.controls.$id.value).subscribe(
        response=>{
          console.log(response)
          this.router.navigateByUrl('/users/'+this.route.snapshot.paramMap.get('id'))
        },
        error => console
          .log(error)
      )

    }
  }
}
