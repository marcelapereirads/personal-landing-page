import {Component} from '@angular/core';
import { NgFor } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';

export interface Tile {
  color: string;
  bgColor: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
    selector: 'app-skills',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.scss'],
    standalone: true,
    imports: [MatGridListModule, NgFor]
})
export class SkillsComponent {
  
  readonly colors = {
    yellow: '#F2EC89',
    lightGray: '#999797',
    darkGray: '#58555A',
    black: '#000000',
    white: '#ffffff'
  };

  tiles: Tile[] = [
    { text: 'CSS', cols: 1, rows: 3, bgColor: this.colors.lightGray, color: this.colors.darkGray },
    { text: 'Bootstrap', cols: 1, rows: 3, bgColor: this.colors.darkGray, color: this.colors.black },
    { text: 'jQuery', cols: 1, rows: 3, bgColor: this.colors.lightGray, color: this.colors.darkGray },
    { text: 'Angular', cols: 3, rows: 3, bgColor: this.colors.yellow, color: this.colors.darkGray },
    { text: 'React', cols: 1, rows: 3, bgColor: this.colors.darkGray, color: this.colors.black },
    { text: 'Javascript', cols: 2, rows: 3, bgColor: this.colors.black, color: this.colors.white },
    { text: 'Jest', cols: 1, rows: 4, bgColor: this.colors.black, color: this.colors.white },
    { text: 'SASS', cols: 1, rows: 4, bgColor: this.colors.darkGray, color: this.colors.black },
    { text: 'HTML', cols: 1, rows: 5, bgColor: this.colors.lightGray, color: this.colors.darkGray },
    { text: 'Testing Library', cols: 2, rows: 1, bgColor: this.colors.yellow, color: this.colors.darkGray },
  ];
}
