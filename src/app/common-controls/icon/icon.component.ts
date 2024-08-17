import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  standalone: true,
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'], // Corrected from 'styleUrl' to 'styleUrls'
})
export class IconComponent {
  @Input() icon: string = '';

  constructor() {
    // This assignment is redundant since you've already initialized `icon` with a default value.
    // this.icon = '';
  }
}
