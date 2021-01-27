import { Component, OnInit } from '@angular/core';
import { Klanten } from '../klanten';
import { KlantenService } from '../klanten.service';

@Component({
  selector: 'app-klanten',
  templateUrl: './klanten.component.html',
  styleUrls: ['./klanten.component.scss']
})
export class KlantenComponent implements OnInit {

  klanten: Klanten[] = [];

  constructor(private klantenService: KlantenService) {
    this.klantenService.getKlanten().subscribe(data => {this.klanten = data;});
  }

  ngOnInit(): void {
  }

}
