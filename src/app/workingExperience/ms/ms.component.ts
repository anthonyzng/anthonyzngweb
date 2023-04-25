import { Component } from '@angular/core';

@Component({
  selector: 'app-ms',
  templateUrl: './ms.component.html',
  styleUrls: ['./ms.component.scss']
})
export class MSComponent {
  ms_img : string = "https://internshipcorners.com/wp-content/uploads/2023/02/Microsoft-Internship.jpg"
  openUrl(url : string){
    window.open(url);
  }
}
