import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarComponent } from './avatar/avatar.component';
import { InfoComponent } from './info/info.component';
import { AboutComponent } from './about.component';

@NgModule({
  declarations: [
    AboutComponent,
    AvatarComponent,
    InfoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AboutComponent
  ]
})
export class AboutModule { }
