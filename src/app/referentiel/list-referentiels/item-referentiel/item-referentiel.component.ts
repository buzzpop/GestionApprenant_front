import {Component, Input, OnInit, AfterViewInit, ViewChildren } from '@angular/core';
import {CollapseComponent} from 'angular-bootstrap-md';

@Component({
  selector: 'app-item-referentiel',
  templateUrl: './item-referentiel.component.html',
  styleUrls: ['./item-referentiel.component.css']
})
export class ItemReferentielComponent implements OnInit, AfterViewInit {
  @ViewChildren(CollapseComponent) collapses:any
  @Input() itemReferentiel :any

  constructor() { }

  ngOnInit(): void {
  }

  delete(id:number) {

  }
  ngAfterViewInit() {
    Promise.resolve().then(() => {
      this.collapses.forEach((collapse: CollapseComponent) => {
        collapse.toggle();
      });
    })
  }

  b64toBlob(b64Data: any, contentType = 'application/pdf'): any {
    contentType = contentType || '';
    const sliceSize = 512;
    b64Data = b64Data.replace(/^[^,]+,/, '');
    b64Data = b64Data.replace(/\s/g, '');
    const byteCharacters = window.atob(b64Data);
    const byteArrays = [];
    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);

      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }

    const blob = new Blob(byteArrays, {type: contentType});
    return blob;
  }
  // _base64ToArrayBuffer(base64Data: any) {
  //   this.base64Data = base64Data;
  //   const binaryString = window.atob(this.base64Data);
  //   const len = binaryString.length;
  //   const bytes = new Uint8Array(len);
  //   for (let i = 0; i < len; i++) {
  //     bytes[i] = binaryString.charCodeAt(i);
  //   }
  //   return bytes.buffer;
  // }

  openProgramme(): any {
    const file = this.b64toBlob(this.itemReferentiel.programme);
    const fileURL = URL.createObjectURL(file);
    window.open(fileURL, '_blank');
  }

}
