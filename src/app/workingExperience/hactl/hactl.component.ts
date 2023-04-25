import { Component } from '@angular/core';

@Component({
  selector: 'app-hactl',
  templateUrl: './hactl.component.html',
  styleUrls: ['./hactl.component.scss']
})
export class HACTLComponent {
  hactl_img : string = "https://www.hactl.com/media/smhh2tud/img_6269.png?width=1920&height=1080&rnd=133185216884770000"
  openUrl(url : string){
    window.open(url);
  }
}
