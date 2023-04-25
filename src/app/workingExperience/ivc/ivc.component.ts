import { Component } from '@angular/core';

@Component({
  selector: 'app-ivc',
  templateUrl: './ivc.component.html',
  styleUrls: ['./ivc.component.scss']
})
export class IVCComponent {
  ivc_img : string = "https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/321757126_697282618723680_1699750509650991058_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e3f864&_nc_ohc=eh8l4gINBswAX9M9CW-&_nc_ht=scontent-ord5-1.xx&oh=00_AfDfaLY_CHJm4-Cyi2__QkTXYdimqwXsHIfw3VMlkmtTbw&oe=644899B0"
  openUrl(url : string){
    window.open(url);
  }
}
