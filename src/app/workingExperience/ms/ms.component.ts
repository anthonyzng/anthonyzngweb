import { Component } from '@angular/core';

@Component({
  selector: 'app-ms',
  templateUrl: './ms.component.html',
  styleUrls: ['./ms.component.scss']
})
export class MSComponent {
  ms_img : string = "./assets/ms.jpg"
  openUrl(url : string){
    window.open(url);
  }
}
