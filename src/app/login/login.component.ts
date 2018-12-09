import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {MemberService} from '../member/member.service';
import {CookieService} from 'ngx-cookie-service';
import {SidebarComponent} from '../sidebar/sidebar.component';

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

  private _isHiddenLogin = false;
  private _isHiddenLogout = true;
  private _isHiddenDiv = false;

  private sideBar: SidebarComponent;


  constructor(private _memberService: MemberService, private router: Router, private _cookieService: CookieService) { }


  ngOnInit() {
    this._memberService.getMembers()
      .subscribe(data => this.members = data);

    this.checkLogin();
  }

  //Stock in memory the idUser and userAdmin?
  public onLogin() {

    console.log('ENTRE DANS LA METHODE_V3');



    for (const member of this.members) {

      if (this._username.valueOf().toUpperCase() === member.username.valueOf().toUpperCase() && this._pwd.valueOf() === member.userPwd.valueOf()) {

        this._isHiddenPwdUser = true;
        this._cookieService.deleteAll();
        this.router.navigate(['auctioned-object']);
        this._cookieService.set( 'login', member.idUser.valueOf() );
        this._cookieService.set('admin', member.userAdmin);
        this._cookieService.set('username', member.username);
        break;

      } else {

        this._isHiddenPwdUser = false;
      }
    }
  }

  public logOut(){
    this._cookieService.deleteAll();
    this.router.navigate(['']);
  }

  public checkLogin(){
    console.log('CHECK LOGIN');
    const cookieExists: boolean = this._cookieService.check('login');

    if (cookieExists === true) {
      this._isHiddenLogin = true;
      this._isHiddenLogout = false;
      this._isHiddenDiv = true;
    } else {
      this._isHiddenLogin = false;
      this._isHiddenLogout = true;
      this._isHiddenDiv = false;
    }
  }

}

