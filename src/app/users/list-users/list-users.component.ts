import {Component, OnInit} from '@angular/core';
import {UsersService} from '../../services/users.service';
import {UserModel} from '../../models/user.model';
import {AuthentificationService} from '../../services/authentification.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  users: UserModel[]=[]
  p :number = 1;
  search: any
  pa: any
  userInformations: any;

  constructor(private  userService: UsersService,
              private authService: AuthentificationService) { }

  ngOnInit(): void {
    this.userService.findAllUser().subscribe(
      (response:any) => {
        this.userService.getUsers(response["hydra:member"])
        this.userService.updateUsersTable().subscribe(
          data=>{
            for (let u of data){
              const  user = new UserModel()
              user.deserialize(u)
              this.users.push(user)
            }
            console.log(this.users);
           this.userService.sort(this.users)
          }
        )
      }
      ,
      error => console.log('Error '+ error)
    )

  }

  resetForm() {
    this.userService.form.reset()
  }

  clickMethod(id:any) {

    this.userInformations = this.authService.getUserInfo();
    console.log(this.userInformations);

      if(confirm("Etes-vous sure de vouloir supprimer?")) {
        this.userService.archiveUser(id).subscribe(
          success=>{
            this.users=[]
            this.userService.findAllUser().subscribe(
              (response:any) => {
                this.userService.getUsers(response["hydra:member"])
              }
            )
          },
          error => console.log(error)
        )
      }
  }

  onScroll() {
    console.log('scrolled!!');
  }

  sendMessage(search:any) {
   this.search= search;
    console.log(this.search);
  }
}
