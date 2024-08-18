import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title-picture',
  standalone: true,
  imports: [],
  templateUrl: './title-picture.component.html',
  styleUrl: './title-picture.component.scss',
})
export class TitlePictureComponent {
  @Input() title: string = 'No Title';
  @Input() picture: string = 'No Picture';
}
