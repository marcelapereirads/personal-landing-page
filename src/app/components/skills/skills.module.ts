import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';
import { SkillsComponent } from './skills.component';

@NgModule({
  declarations: [
    SkillsComponent
  ],
  imports: [
    CommonModule,
    MatGridListModule
  ],
  exports: [
    SkillsComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class SkillsModule { }
