import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {MemberService} from '../member/member.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public members = [];
  private _pdw: string;
  private _username: string;


  constructor(private _memberService: MemberService) { }


  ngOnInit() {
    this._memberService.getMembers()
      .subscribe(data => this.members = data);
  }



}
