import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BestellingenComponent } from './bestellingen/bestellingen.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailComponent } from './klanten/detail/detail.component';
import { KlantenComponent } from './klanten/klanten.component';
import { MdwformComponent } from './mdwform/mdwform.component';
import { NewComponent } from './mdwform/new/new.component';
import { MedewerkerComponent } from './medewerker/medewerker.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'medewerkers',
    component: MdwformComponent
  },
  {
    path: 'bestellingen',
    component: BestellingenComponent
  },
  {
    path: 'klanten',
    component: KlantenComponent
  },
  {
    path: 'klanten/:id',
    component: DetailComponent
  },
  {
    path: 'medewerkers/new',
    component: NewComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
