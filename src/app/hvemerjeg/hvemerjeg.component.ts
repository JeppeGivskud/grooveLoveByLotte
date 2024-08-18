import { Component } from '@angular/core';
import { TitlePictureComponent } from '../common-controls/title-picture/title-picture.component';

@Component({
  selector: 'app-hvemerjeg',
  standalone: true,
  imports: [TitlePictureComponent],
  templateUrl: './hvemerjeg.component.html',
  styleUrl: './hvemerjeg.component.scss',
})
export class HvemerjegComponent {}
