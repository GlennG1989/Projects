import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teller',
  templateUrl: './teller.component.html',
  styleUrls: ['./teller.component.scss']
})
export class TellerComponent implements OnInit {
  public getal:number = 1
  constructor() {
      setInterval( ()=>{this.getal++}, 1000);
  }
  

  ngOnInit() {
    return this.getal;
  }
  
  

}
