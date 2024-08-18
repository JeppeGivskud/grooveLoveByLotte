import { Component } from '@angular/core';
import { TitlePictureComponent } from '../common-controls/title-picture/title-picture.component';

@Component({
  selector: 'app-forside',
  standalone: true,
  imports: [TitlePictureComponent],
  templateUrl: './forside.component.html',
  styleUrl: './forside.component.scss',
})
export class ForsideComponent {}
