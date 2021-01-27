import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Medewerker } from 'src/app/medewerker';
import { MedewerkerService } from 'src/app/medewerker.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {

  medewerkers: Medewerker[] = [];
  id: string = '';
  naam: string = '';
  email: string = '';
  afb: string = '';


  constructor(private medewerkerService: MedewerkerService, private router: Router) {
    this.medewerkerService.getMedewerkers().subscribe(data => {this.medewerkers = data;});
  }

  ngOnInit(): void {
  }
  reset() {
    this.naam = '';
    this.email = '';
    this.afb = '';

  }
  addMedewerker():void {
    this.medewerkerService.addMedewerker(this.naam,this.email,this.afb).subscribe(data =>{
      this.router.navigateByUrl('medewerkers')
    })


  }
  lijstWissen(){
    this.medewerkers = [];
  }
}
