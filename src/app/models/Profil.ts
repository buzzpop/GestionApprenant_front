import {Deserializable} from './deserializable.interface';

export class Profil implements Deserializable{
  id?: number
 libelle: string=""

  deserialize(input: any): this {
  Object.assign(this,input)
    return this
  }


}
