import { Component } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {
  snake_game_img : string = "./assets/snake_game.png"
  books_img : string = "./assets/book_fullstack.png";
  bmi_img : string ="./assets/bmi_tools.png";
  openUrl(url : string){
    window.open(url);
  }
}
