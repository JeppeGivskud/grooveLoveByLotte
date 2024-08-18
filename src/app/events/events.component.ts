import { Component } from '@angular/core';
import { TitlePictureComponent } from '../common-controls/title-picture/title-picture.component';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [TitlePictureComponent],
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss',
})
export class EventsComponent {}
