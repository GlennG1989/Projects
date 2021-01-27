import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Klanten } from 'src/app/klanten';
import { KlantenService } from 'src/app/klanten.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  public klant: Klanten;
  constructor(private activatedRoute: ActivatedRoute, private klantenService: KlantenService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      (route: ParamMap) => {
        this.klantenService.getKlantDetail(route.get('id'))
        .subscribe( data => {
          this.klant = data;
        }
        );
      }
    )
  }


}
