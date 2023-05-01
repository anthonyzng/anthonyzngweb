import { Component, ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  encapsulation:ViewEncapsulation.None
})

export class ProjectComponent {
  cardData:CardData[] = [
    {title:"Book System",img:"./assets/book_fullstack.png",demo_link:"https://drive.google.com/file/d/1ZZyOJdGPsz08wsMyhBZlMuWr0ZQNkSYv/view",code_link:"",tech:"Tech-stack : AngularCLI + MySQL + NodeJs , Express(Rest-API) , MongoDb , ELM"},
    {title:"Online TODO List Mobile application",img:"./assets/todo.png",demo_link:"https://drive.google.com/file/d/1K3Gis8FFDylVvMQryFOznIFraseatQqr/view",code_link:"",tech:"Tech-stack : Android + NodeJs + Express"},
    {title:"Online TODO List Mobile application",img:"./assets/dog.png",demo_link:"https://drive.google.com/file/d/1gXKdiSSjUt9m6SMwhnqzV95KUGzHd3mp/view",code_link:"",tech:"Tech-stack : Android + TensorFlowLite + Python ,This application aims to compare RCNN & CNN model in computer vision area."}
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