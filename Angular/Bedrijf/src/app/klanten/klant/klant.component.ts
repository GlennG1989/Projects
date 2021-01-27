import { Component, Input, OnInit } from '@angular/core';
import { Klanten } from 'src/app/klanten';
import { KlantenService } from 'src/app/klanten.service';


@Component({
  selector: 'app-klant',
  templateUrl: './klant.component.html',
  styleUrls: ['./klant.component.scss']
})
export class KlantComponent implements OnInit {
  @Input() klanten: Klanten = new Klanten('','','','','');

  constructor(private KlantenService: KlantenService) { }

  ngOnInit(): void {
  }

}
