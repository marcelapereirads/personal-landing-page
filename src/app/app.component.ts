import { Component } from '@angular/core';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { SkillsComponent } from './components/skills/skills.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [AboutComponent, SkillsComponent, FooterComponent],
})
export class AppComponent {
  title = 'personal-landing-page';
}
