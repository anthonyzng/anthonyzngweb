import { Component } from '@angular/core';
import { Routes } from '@angular/router';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  snake_game_img : string = "./assets/snake_game.png"
  books_img : string = "./assets/book_fullstack.png";
  bmi_img : string ="./assets/bmi_tools.png";
  openUrl(url : string){
    window.open(url);
  }
}
