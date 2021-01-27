import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Medewerker } from '../medewerker';
import { MedewerkerService } from '../medewerker.service';

@Component({
  selector: 'app-medewerker',
  templateUrl: './medewerker.component.html',
  styleUrls: ['./medewerker.component.scss']
})
export class MedewerkerComponent implements OnInit {
  @Input() medewerker: Medewerker = new Medewerker('','','','');
  @Output() refresh = new EventEmitter<any>();
  constructor(private medewerkerService: MedewerkerService) { }

  ngOnInit(): void {
  }

  verwijderMedewerker(id:string){
    this.medewerkerService.deleteMedewerkers(id).subscribe(data =>{
      this.refresh.emit(true);
    });
  }

}
