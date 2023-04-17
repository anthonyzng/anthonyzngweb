import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//main core component
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// created component
import { HomeComponent } from './home/home.component';
import { CvComponent } from './cv/cv.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProjectComponent } from './project/project.component';
import { ToolsComponent } from './tools/tools.component';
import { FooterComponent } from './footer/footer.component';
import { GameComponent } from './game/game.component';
//angular material 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import { MatMenuModule } from '@angular/material/menu';
import { BackgroundComponent } from './background/background.component';
import {MatCardModule} from '@angular/material/card'; 
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CvComponent,
    NotFoundComponent,
    ProjectComponent,
    ToolsComponent,
    FooterComponent,
    GameComponent,
    BackgroundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    HttpClientModule,
    MatMenuModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
