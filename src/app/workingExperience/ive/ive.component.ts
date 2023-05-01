import { Component } from '@angular/core';

@Component({
  selector: 'app-ive',
  templateUrl: './ive.component.html',
  styleUrls: ['./ive.component.scss']
})
export class IVEComponent {
  ive_img : string = "./assets/ive.jpg"
  openUrl(url : string){
    window.open(url);
  }
}
