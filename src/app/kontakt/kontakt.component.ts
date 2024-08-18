import { Component } from '@angular/core';
import { TitlePictureComponent } from '../common-controls/title-picture/title-picture.component';

@Component({
  selector: 'app-kontakt',
  standalone: true,
  imports: [TitlePictureComponent],
  templateUrl: './kontakt.component.html',
  styleUrl: './kontakt.component.scss',
})
export class KontaktComponent {}
