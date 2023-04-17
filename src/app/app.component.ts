import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'anthonyzngweb';
  scrollToTop(){
    console.log("clicked");
    window.scrollTo(0,0);
  }
}
