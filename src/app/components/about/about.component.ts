import { Component, OnInit } from '@angular/core';
import { InfoComponent } from './info/info.component';
import { AvatarComponent } from './avatar/avatar.component';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss'],
    standalone: true,
    imports: [AvatarComponent, InfoComponent]
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
