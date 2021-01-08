export class Profil{
  id?: number
 libelle: string

  public constructor(libelle:string,id?:number) {
    this.id= id;
    this.libelle= libelle;

  }
}
