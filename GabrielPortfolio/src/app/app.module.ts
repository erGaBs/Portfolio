import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/main/header/header.component';
import { FooterComponent } from './components/main/footer/footer.component';
import { HomeComponent } from './components/main/home/home.component';
import { AboutmeComponent } from './components/main/aboutme/aboutme.component';
import { ProgettiComponent } from './components/main/progetti/progetti.component';
import { CarouselComponent } from './components/utils/carousel/carousel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChiSonoComponent } from './components/utils/chi-sono/chi-sono.component';
import { ContattiComponent } from './components/utils/contatti/contatti.component';
import { SoftSkillsComponent } from './components/utils/soft-skills/soft-skills.component';
import { HardSkillsComponent } from './components/utils/hard-skills/hard-skills.component';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutmeComponent,
    ProgettiComponent,
    CarouselComponent,
    ChiSonoComponent,
    ContattiComponent,
    SoftSkillsComponent,
    HardSkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
