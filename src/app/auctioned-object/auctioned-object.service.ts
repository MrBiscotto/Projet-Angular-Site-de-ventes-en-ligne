import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IMember} from '../member/IMember';
import {IObject} from './IObject';

@Injectable({
  providedIn: 'root'
})
export class AuctionedObjectService {

  constructor(private http: HttpClient) { }

  getObjects(): Observable<IObject[]> {
    return this.http.get<IObject[]>('http://localhost:50867/api/auctioned_object');
  }

  deleteObject(objectId){
    return this.http.delete('http://localhost:50867/api/auctioned_object/' + objectId);
  }

  getObject(objectId) {
    return this.http.get('http://localhost:50867/api/auctioned_object/' + objectId);
  }

  addObject(name: string, descri: string, price: number, idUser: number, cat: string) {
    return this.http.post('http://localhost:50867/api/Auctioned_object/', {
      'nameObject': name,
      'descriptionObject': descri,
      'priceObject': price,
      'idUser' : idUser,
      'catObject' : cat
    });
  }
}
