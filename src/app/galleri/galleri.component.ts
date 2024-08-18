import { Component } from '@angular/core';
import { TitlePictureComponent } from '../common-controls/title-picture/title-picture.component';

@Component({
  selector: 'app-galleri',
  standalone: true,
  imports: [TitlePictureComponent],
  templateUrl: './galleri.component.html',
  styleUrl: './galleri.component.scss',
})
export class GalleriComponent {}
