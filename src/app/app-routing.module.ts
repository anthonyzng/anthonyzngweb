import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// created component
import { HomeComponent } from './home/home.component';
import { CvComponent } from './cv/cv.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProjectComponent } from './project/project.component';
import { ToolsComponent } from './tools/tools.component';
import { FooterComponent } from './footer/footer.component';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { GameComponent } from './game/game.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', component: HomeComponent},
  {path: 'cv', component: CvComponent},
  {path: 'project', component: ProjectComponent},
  {path: 'tool', component: ToolsComponent},
  {path: 'game', component: GameComponent},
  {path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  // constructor(
  //   private matIconRegistry: MatIconRegistry,
  //   private domSanitizer: DomSanitizer
  // ) {
  //   this.matIconRegistry.addSvgIcon(
  //     'my-icon',
  //     this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/c_linkg_pig.svg')
  //   );
  //   }
}
