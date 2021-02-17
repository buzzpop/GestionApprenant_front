import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'refertielFilter'
})
export class RefertielFilterPipe implements PipeTransform {

  transform(value: any, search:string, index:string): any {
    const tab :any = []
    if (value.length===0 || search.length===0){
      return value
    }
    if (index==='libelle'){
      return value.filter((searchValue: any) =>
        searchValue[index].toLocaleLowerCase().includes((search).toLocaleLowerCase())
      );
    }else{
      value.filter((elmt: any) => {
        for (const c of elmt[index]){
          if (c['libelle'].toLocaleLowerCase().includes(search.toLocaleLowerCase())){
            tab.push(elmt);
          }
        }
      });
    }

    return tab;

  }

}
