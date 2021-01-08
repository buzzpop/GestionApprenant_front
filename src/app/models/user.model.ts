import {Deserializable} from './deserializable.interface';

export class UserModel implements Deserializable{

  constructor() {
  }

  id?:number=0;
  firstname:string='';
  lastname:string='';
  email:string='';
  password:string='';
  avatar:string='';
  address:string='';
  profil:any='';
  tel:string="";

  deserialize(input: any): this {
   Object.assign(this, input)
    return this
  }

}
