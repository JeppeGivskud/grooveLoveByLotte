import { Routes } from '@angular/router';
import { ForsideComponent } from './forside/forside.component';
import { EventsComponent } from './events/events.component';
import { GalleriComponent } from './galleri/galleri.component';
import { HoldComponent } from './hold/hold.component';
import { HvemerjegComponent } from './hvemerjeg/hvemerjeg.component';
import { KontaktComponent } from './kontakt/kontakt.component';

export const routes: Routes = [
  { path: '', component: ForsideComponent },
  { path: 'events', component: EventsComponent },
  { path: 'forside', component: ForsideComponent },
  { path: 'galleri', component: GalleriComponent },
  { path: 'hold', component: HoldComponent },
  { path: 'hvemerjeg', component: HvemerjegComponent },
  { path: 'kontakt', component: KontaktComponent },
];
