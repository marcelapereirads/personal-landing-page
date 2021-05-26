import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutModule } from './components/about/about.module';
import { SkillsModule } from './components/skills/skills.module';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AboutModule,
    SkillsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
