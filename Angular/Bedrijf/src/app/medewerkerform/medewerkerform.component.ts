import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medewerkerform',
  templateUrl: './medewerkerform.component.html',
  styleUrls: ['./medewerkerform.component.scss']
})
export class MedewerkerformComponent implements OnInit {
  medewerkers:string [] = []

  naam: string;
  email: string;
  afbeelding: string;
  disabled: boolean = false;
  verbergen: boolean = true;
  tonen: string = 'Toon gegevens';


  constructor() { }

  ngOnInit(): void {
  }

  GegevensTonen() {
    if (this.verbergen) {
      this.verbergen = false;
      this.tonen = ' Verberg gegevens';



    } else {
      this.verbergen = true;
      this.tonen = 'Toon gegevens';

    }
  }
  knopke(){
    if (this.naam != '' || this.email != '' || this.afbeelding != ''){
      return false
    } else {
      return true
    }
  }

  Reset() {
    this.naam = '';
    this.email = '';
    this.afbeelding = '';
    this.disabled = false;
    this.verbergen = true;
    this.tonen = 'Toon gegevens'
  }
}
