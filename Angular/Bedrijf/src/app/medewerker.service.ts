import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medewerker } from './medewerker';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MedewerkerService {



  constructor(private http: HttpClient) { }

  getMedewerkers(): Observable<Medewerker[]> {
    return this.http.get<Medewerker[]>('https://bedrijf-407ff-default-rtdb.europe-west1.firebasedatabase.app//medewerkers.json')
    .pipe(map ( data => {
      let arr: Medewerker[] = [];
      for (let x in data ) {
        let m: Medewerker = new Medewerker(data[x]['naam'],data[x]['email'],data[x]['afbeelding'],x);
        arr.push(m);
      }
      return arr;
    }));
  }
  addMedewerker(naam: string,email: string, afb: string) {
    let mw: Medewerker = new Medewerker(naam, email, afb);
    return this.http.post('https://bedrijf-407ff-default-rtdb.europe-west1.firebasedatabase.app//medewerkers.json',mw);
  }

  deleteMedewerkers(id: string){
    return this.http.delete('https://bedrijf-407ff-default-rtdb.europe-west1.firebasedatabase.app//medewerkers/' + id + '.json');

  }
}
