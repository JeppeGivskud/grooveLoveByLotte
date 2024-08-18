import { Component } from '@angular/core';
import { TitlePictureComponent } from '../common-controls/title-picture/title-picture.component';

@Component({
  selector: 'app-hold',
  standalone: true,
  imports: [TitlePictureComponent],
  templateUrl: './hold.component.html',
  styleUrl: './hold.component.scss',
})
export class HoldComponent {}
