import { Component } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
interface Route {
  key: string;
  selected: boolean;
}

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [IconComponent, CommonModule],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss',
})
export class TopBarComponent {
  goTo(url: string) {
    console.log('Go to: ', url);
    window.open(url);
  }
  constructor(private router: Router) {}
  selected = 'Forside';

  routes: Route[] = [
    { key: 'Forside', selected: false },
    { key: 'Events', selected: false },
    { key: 'Galleri', selected: true },
    { key: 'Hold', selected: false },
    { key: 'Hvem er jeg', selected: false },
    { key: 'Kontakt', selected: false },
  ];
  pressRouterLink(route: string) {
    this.router.navigate([route]);
    console.log('Press route: ', route);
    const index = this.routes.findIndex((r) => r.key === route);
    if (index !== -1) {
      this.routes[index].selected = !this.routes[index].selected;
      this.selected = route;
    }
  }
}
