import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  computers_img : string = "./assets/computers.svg"
  my_cats : string = "./assets/mycats.jpg"
}
