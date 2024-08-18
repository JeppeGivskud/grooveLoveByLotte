import { Component } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import {
  Router, // Keep Router as we will use it
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { CommonModule } from '@angular/common';

interface Route {
  key: string;
  route: string;
}

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [
    IconComponent,
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'], // Corrected property name from styleUrl to styleUrls
})
export class TopBarComponent {
  selected = '';

  routes: Route[] = [
    { key: 'Forside', route: '' },
    { key: 'Events', route: 'Events' },
    { key: 'Galleri', route: 'Galleri' },
    { key: 'Hold', route: 'Hold' },
    { key: 'Hvem er jeg?', route: 'Hvemerjeg' },
    { key: 'Kontakt', route: 'Kontakt' },
  ];

  constructor(private router: Router) {} // Injecting the Router service

  goTo(url: string) {
    console.log('Go to: ', url);
    window.open(url);
  }

  pressRouterLink(route: string) {
    console.log('Press route: ', route);
    this.selected = route;
    this.router.navigate([route]); // Use the Router service to navigate
  }
}
