import { Component } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {
  cardData:CardData[] = [
    {title:"Snake Game",img:"./assets/snake_game.png",demo_link:"https://anthonyzng.github.io/my-snake-game",code_link:"https://github.com/anthonyzng/my-snake-game",tech:"Tech-stack : AngularCLI"}
  ]
  openUrl(url : string){
    window.open(url);
  }
}

export interface CardData{
  title: string;
  img: string;
  demo_link:string;
  code_link:string;
  tech:string;
}