import { Component } from '@angular/core';
import { INFO_TEXT } from './info.constant';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent {

  readonly text = INFO_TEXT;
}

