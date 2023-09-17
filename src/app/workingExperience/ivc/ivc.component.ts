import { Component } from '@angular/core';

@Component({
  selector: 'app-ivc',
  templateUrl: './ivc.component.html',
  styleUrls: ['./ivc.component.scss']
})
export class IVCComponent {
  ivc_img : string = "./assets/ivc.png"
  openUrl(url : string){
    window.open(url);
  }
}
