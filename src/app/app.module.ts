import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//main core component
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// created component
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProjectComponent } from './project/project.component';
import { ToolsComponent } from './tools/tools.component';
import { FooterComponent } from './footer/footer.component';
import { GameComponent } from './game/game.component';
import { BackgroundComponent } from './background/background.component';
import { WorksComponent } from './works/works.component';
import { HACTLComponent } from './workingExperience/hactl/hactl.component';

//angular material 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import {LayoutModule} from '@angular/cdk/layout';
import { InfoComponent } from './info/info.component';
import { AboutComponent } from './about/about.component';
import { SwiperModule } from 'swiper/angular';
import {MatSliderModule} from '@angular/material/slider';
import { IVCComponent } from './workingExperience/ivc/ivc.component';
import { UWEComponent } from './workingExperience/uwe/uwe.component';
import { MSComponent } from './workingExperience/ms/ms.component';
import { IVEComponent } from './workingExperience/ive/ive.component';
import { PortfolioComponent } from './portfolio/portfolio.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    ProjectComponent,
    ToolsComponent,
    FooterComponent,
    GameComponent,
    BackgroundComponent,
    AboutComponent,
    InfoComponent,
    WorksComponent,
    HACTLComponent,
    IVCComponent,
    UWEComponent,
    MSComponent,
    IVEComponent,
    PortfolioComponent
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
    MatCardModule,
    LayoutModule,
    SwiperModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  
}
