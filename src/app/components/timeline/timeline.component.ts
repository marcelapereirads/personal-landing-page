import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import {
  NgxTimelineEvent,
  NgxTimelineEventChangeSideInGroup,
  NgxTimelineModule,
} from '@frxjs/ngx-timeline';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
  standalone: true,
  imports: [CommonModule, NgxTimelineModule],
  encapsulation: ViewEncapsulation.None,
})
export class TimelineComponent {
  readonly changeSide = NgxTimelineEventChangeSideInGroup.ALL;

  readonly events: Array<NgxTimelineEvent> = [
    {
      timestamp: new Date('2023-08'),
      title: 'Critical Teckworks',
    },
    {
      timestamp: new Date('2021-10'),
      title: 'Aubay Portugal S.A.',
    },
    {
      timestamp: new Date('2021-04'),
      title: 'Zup Innovation',
    },
    {
      timestamp: new Date('2020-02'),
      title: 'TQI Consultoria e Desenvolvimento',
    },
    {
      timestamp: new Date('2019-08'),
      title: 'Jaraguá Tecnologia',
    },
    {
      timestamp: new Date('2016-01'),
      title: 'Neppo Soluções em TI',
    },
    {
      timestamp: new Date('2014-10'),
      title: 'Plena Serviços Contábeis',
    },
  ];
}
