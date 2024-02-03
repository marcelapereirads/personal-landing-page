import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: true,
  imports: [NgFor],
})
export class FooterComponent {
  readonly links = [
    {
      name: 'Linkedin',
      icon: 'assets/svg/linkedin.svg',
      url: 'https://www.linkedin.com/in/marcela-pereira-0571ba9a/',
    },
    {
      name: 'GitHub',
      icon: 'assets/svg/github.svg',
      url: 'https://github.com/marcelapereirads',
    },
  ];
}
