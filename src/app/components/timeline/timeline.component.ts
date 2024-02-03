import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class TimelineComponent {
  readonly experiences = [
    'Critical Teckworks',
    'Aubay Portugal S.A.',
    'Zup Innovation',
    'TQI Consultoria e Desenvolvimento',
    'Jaraguá Tecnologia',
    'Neppo Soluções em TI',
    'Plena Serviços Contábeis',
  ];
}
