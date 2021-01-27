import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Klanten } from './klanten';

@Injectable({
  providedIn: 'root'
})
export class KlantenService {

  constructor(private http: HttpClient) { }

  getKlanten(): Observable<Klanten[]> {
    return this.http.get<Klanten[]>('https://bedrijf-407ff-default-rtdb.europe-west1.firebasedatabase.app/klanten.json')
    .pipe(map ( data => {
      let arr: Klanten[] = [];
      for (let x in data ) {
        let m: Klanten = new Klanten(data[x]['naam'],data[x]['plaats'],data[x]['postcode'],data[x]['straat'],data[x]['voornaam'],x);
        arr.push(m);
      }
      return arr;
    }));
  }

  getKlantDetail(id:string): Observable<Klanten>{
    return this.http.get<Klanten>('https://bedrijf-407ff-default-rtdb.europe-west1.firebasedatabase.app/klanten/'+ id +'.json')
  }
}
