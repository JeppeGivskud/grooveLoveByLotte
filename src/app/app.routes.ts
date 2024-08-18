import { Routes } from '@angular/router';
import { ForsideComponent } from './forside/forside.component';
import { EventsComponent } from './events/events.component';
import { GalleriComponent } from './galleri/galleri.component';
import { HoldComponent } from './hold/hold.component';
import { HvemerjegComponent } from './hvemerjeg/hvemerjeg.component';
import { KontaktComponent } from './kontakt/kontakt.component';

export const routes: Routes = [
  { path: '', component: ForsideComponent },
  { path: 'Events', component: EventsComponent },
  { path: 'Forside', component: ForsideComponent },
  { path: 'Galleri', component: GalleriComponent },
  { path: 'Hold', component: HoldComponent },
  { path: 'Hvemerjeg', component: HvemerjegComponent },
  { path: 'Kontakt', component: KontaktComponent },
];
