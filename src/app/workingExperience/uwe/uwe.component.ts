import { Component } from '@angular/core';

@Component({
  selector: 'app-uwe',
  templateUrl: './uwe.component.html',
  styleUrls: ['./uwe.component.scss']
})
export class UWEComponent {
  uwe_img : string = "https://cdn.veganrecipeclub.org.uk/wp-content/uploads/2022/07/UWE-French-Campus.jpg"
  openUrl(url : string){
    window.open(url);
  }
}
