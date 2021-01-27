import { Component, OnInit } from '@angular/core';
import { Medewerker } from '../medewerker';
import { MedewerkerService } from '../medewerker.service';

@Component({
  selector: 'app-mdwform',
  templateUrl: './mdwform.component.html',
  styleUrls: ['./mdwform.component.scss']
})
export class MdwformComponent implements OnInit {

  medewerkers: Medewerker[] = [];
  id: string = '';
  naam: string = '';
  email: string = '';
  afb: string = '';


  constructor(private medewerkerService: MedewerkerService) {
    this.medewerkerService.getMedewerkers().subscribe(data => {this.medewerkers = data;});
  }

  ngOnInit(): void {
  }

  refreshMedewerkers(p:any){
    this.medewerkerService.getMedewerkers().subscribe(data => {this.medewerkers = data;});
  }

}
