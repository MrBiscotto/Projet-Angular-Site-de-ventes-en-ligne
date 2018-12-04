import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IMember} from './IMember';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private http: HttpClient) { }

  getMembers(): Observable<IMember[]> {
    return this.http.get<IMember[]>('http://localhost:50867/api/Member');
  }

  getMember(memberId) {
    return this.http.get('http://localhost:50867/api/Member/' + memberId);
  }
}
