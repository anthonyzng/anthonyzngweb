import { Component } from '@angular/core';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent {
  cardData:CardData[] = [
    {title:"BMI Calculator",img:"./assets/bmi_tools.png",demo_link:"https://anthonyzng.github.io/BMI-Calculator/",code_link:"https://github.com/anthonyzng/BMI-Calculator",tech:"Tech-stack : AngularCLI"}
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