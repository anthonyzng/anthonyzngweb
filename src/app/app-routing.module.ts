import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// created component
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProjectComponent } from './project/project.component';
import { ToolsComponent } from './tools/tools.component';
import { FooterComponent } from './footer/footer.component';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { GameComponent } from './game/game.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'projects', component: ProjectComponent},
  {path: 'tools', component: ToolsComponent},
  {path: 'games', component: GameComponent},
  {path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {scrollPositionRestoration: 'enabled'}
    )],
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
