import { Component, OnInit } from '@angular/core';

let Datum = new Date();
let Year = Datum.getFullYear();

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles:[`
  .foot {
    width: 100%;
    font-family: 'Montserrat', sans-serif;
    color: white;
    position: fixed;
    bottom: 0;
  }`]
})


export class FooterComponent implements OnInit {


  constructor() { }

  ngOnInit() {
    
  }
  GetYear():number{
    return new Date().getFullYear();
  }

}
