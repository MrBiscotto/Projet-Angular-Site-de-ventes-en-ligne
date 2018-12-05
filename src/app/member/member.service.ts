import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IMember} from './IMember';
import {NavigationEnd, Router} from '@angular/router';


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

  deleteMember(memberId) {
    return this.http.delete('http://localhost:50867/api/Member/' + memberId);
  }

  addMember(email: string, user: string, pwd: string) {
    return this.http.post('http://localhost:50867/api/Member/', {
      'emailUser': email,
        'username': user,
        'userPwd': pwd,
        'userAdmin' : 0
    });
  }

}
