import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MedewerkerService } from '../medewerker.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public aantal: number;

  constructor(private router: Router, private medewerkerService: MedewerkerService) {}

  ngOnInit(): void {
    this.medewerkerService.getMedewerkers().subscribe( data =>{
      this.aantal = data.length;
    })
  }

}
