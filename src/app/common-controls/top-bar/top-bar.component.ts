import { Component } from '@angular/core';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss',
})
export class TopBarComponent {
  goTo(url: string) {
    console.log('Go to: ', url);
    window.open(url);
  }
}
