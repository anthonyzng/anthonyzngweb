import { Component } from '@angular/core';

@Component({
  selector: 'app-ive',
  templateUrl: './ive.component.html',
  styleUrls: ['./ive.component.scss']
})
export class IVEComponent {
  ive_img : string = "https://www.ive.edu.hk/uploads/ive/images/oval/en/main_oval_overview_tsingyi.jpg"
  openUrl(url : string){
    window.open(url);
  }
}
