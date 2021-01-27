import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TellerComponent } from './teller/teller.component';
import { MedewerkerformComponent } from './medewerkerform/medewerkerform.component';
import { FormsModule } from '@angular/forms';
import { MedewerkerComponent } from './medewerker/medewerker.component';
import { MdwformComponent } from './mdwform/mdwform.component';
import { HttpClientModule } from "@angular/common/http";
import { KlantenComponent } from './klanten/klanten.component';
import { BestellingenComponent } from './bestellingen/bestellingen.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewComponent } from './mdwform/new/new.component';
import { DetailComponent } from './klanten/detail/detail.component';
import { KlantComponent } from './klanten/klant/klant.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    TellerComponent,
    MedewerkerformComponent,
    MedewerkerComponent,
    MdwformComponent,
    KlantenComponent,
    BestellingenComponent,
    DashboardComponent,
    NewComponent,
    DetailComponent,
    KlantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
