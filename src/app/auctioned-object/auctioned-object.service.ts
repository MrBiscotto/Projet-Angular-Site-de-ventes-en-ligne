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

  getObject(objectId) {
    return this.http.get('http://localhost:50867/api/auctioned_object/' + objectId);
  }
}
