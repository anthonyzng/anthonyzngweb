import { Component } from '@angular/core';

@Component({
  selector: 'app-hactl',
  templateUrl: './hactl.component.html',
  styleUrls: ['./hactl.component.scss']
})
export class HACTLComponent {
  hactl_img : string = "./assets/hactl.png"
  openUrl(url : string){
    window.open(url);
  }
}
