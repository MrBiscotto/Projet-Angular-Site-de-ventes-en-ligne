import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IMember} from './IMember';
import {IModerator} from './IModerator';

@Injectable({
  providedIn: 'root'
})
export class ModeratorService {

  constructor(private http: HttpClient) { }

  addModo(memberId) {
    return this.http.post('http://localhost:50867/api/moderator/', {
      'idUser': memberId
    });
  }

  deleteModerator(memberId) {
    return this.http.delete('http://localhost:50867/api/moderator/' + memberId);
  }

  getModerators(): Observable<IModerator[]> {
    return this.http.get<IModerator[]>('http://localhost:50867/api/moderator');
  }
}
