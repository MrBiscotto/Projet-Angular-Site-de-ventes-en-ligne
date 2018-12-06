import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ISoldObject} from './ISoldObject';

@Injectable({
  providedIn: 'root'
})
export class SoldObjectService {

  constructor(private http: HttpClient) {
  }

  getSoldObjects(): Observable<ISoldObject[]> {
    return this.http.get<ISoldObject[]>('http://localhost:50867/api/sold_object');
  }

  getSoldObject(objId) {
    return this.http.get('http://localhost:50867/api/sold_object/' + objId);
  }

  deleteSoldObject(objId) {
    return this.http.delete('http://localhost:50867/api/sold_object/' + objId);
  }

  addSoldObject(price: number, name: string, cat: string) {
    return this.http.post('http://localhost:50867/api/sold_object/', {
      'finalPrice': price,
      'nameObject': name,
      'catObject': cat
    });

  }
}
