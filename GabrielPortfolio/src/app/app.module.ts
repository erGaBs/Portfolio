import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/main/dashboard/dashboard.component';
import { HeaderComponent } from './components/main/header/header.component';
import { FooterComponent } from './components/main/footer/footer.component';
import { ProjectsComponent } from './components/sections/projects/projects.component';
import { PresentationComponent } from './components/sections/presentation/presentation.component';
import { AboutmeComponent } from './components/sections/aboutme/aboutme.component';
import { ParagrafoComponent } from './components/sections/aboutme/paragrafo/paragrafo.component';
import { SoftskillsComponent } from './components/sections/aboutme/softskills/softskills.component';
import { HardskillsComponent } from './components/sections/aboutme/hardskills/hardskills.component';
import { EsperienzeComponent } from './components/sections/aboutme/esperienze/esperienze.component';

//materials



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    ProjectsComponent,
    PresentationComponent,
    AboutmeComponent,
    ParagrafoComponent,
    SoftskillsComponent,
    HardskillsComponent,
    EsperienzeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
