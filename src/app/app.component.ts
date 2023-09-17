import { Component, HostListener } from '@angular/core';
import { ViewportScroller } from "@angular/common";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'anthonyzngweb';
  
  onActivate(event:any){
    window.scrollTo(0, 0);
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}
