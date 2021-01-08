import {Component, OnInit} from '@angular/core';
import {UsersService} from '../../services/users.service';
import {UserModel} from '../../models/user.model';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  users: UserModel[]=[]

  constructor(private  userService: UsersService) { }

  ngOnInit(): void {
    this.userService.findAllUser().subscribe(

      response => {
        // @ts-ignore
        for (let u of response['hydra:member']){
         const  user = new UserModel()
          user.deserialize(u)
          this.users.push(user)
        }
      }
      ,
      error => console.log('Error '+ error)
    )
  }

  resetForm() {
    this.userService.form.reset()
  }

  clickMethod(id:any) {
      if(confirm("Etes-vous sure de vouloir supprimer?")) {
        this.userService.archiveUser(id).subscribe(
          success=>{console.log(success)
            alert('Sppression réussie')
          },
          error => console.log(error)
        )
      }
  }
}
