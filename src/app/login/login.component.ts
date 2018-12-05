import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {MemberService} from '../member/member.service';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public members = [];
  private _pwd: string;
  private _username: string;
  private _isHiddenPwdUser = true;


  constructor(private _memberService: MemberService, private router: Router, private cookieService: CookieService) { }


  ngOnInit() {
    this._memberService.getMembers()
      .subscribe(data => this.members = data);
  }

  //Stock in memory the idUser and userAdmin?
  public onLogin() {

    console.log('ENTRE DANS LA METHODE_V3');

    for (const member of this.members) {

      if (this._username.valueOf().toUpperCase() === member.username.valueOf().toUpperCase() && this._pwd.valueOf() === member.userPwd.valueOf()) {

        this._isHiddenPwdUser = true;
        this.router.navigate(['auctioned-object']);
        this.cookieService.set( 'login', member.idUser.valueOf() );
        this.cookieService.set('admin', member.userAdmin);
        this.cookieService.set('username', member.username);
        break;

      } else {

        this._isHiddenPwdUser = false;
      }
    }
  }

}

