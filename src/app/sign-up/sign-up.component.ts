import { Component, OnInit } from '@angular/core';
import {MemberService} from '../member/member.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  private _pwd: string;
  private _cfPwd: string;
  private _email: string;
  private _username: string;
  public members = [];
  private _verifyUsername = false;

  private emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';


  // btnEnable = false;

  private _isHiddenBothPassword = true;
  private _isHiddenUsername = true;
  private _isHiddenEmail = true;

  constructor(public _memberService: MemberService, private _router: Router) { }

  ngOnInit(){
    this._memberService.getMembers()
      .subscribe(data => this.members = data);
  }

  // Verify the username
  public onChangeUsername(): boolean {

    for (const member of this.members) {

      if (this._username.valueOf().toUpperCase() === member.username.valueOf().toUpperCase()) {

        this._isHiddenUsername = false;
        this._verifyUsername = true;
        return true;
        break;
      }
    }

       if(this._verifyUsername === false) {

        this._isHiddenUsername = true;
        return false;
      }

  }

  // ADD Member
  public signUp() {
    if (this.onChangeUsername() === false && this.onChangePassword() === true && this.onChangeEmail() === true) {
      this._memberService.addMember(this._email, this._username, this._pwd).subscribe();
      this._router.navigate(['login']);
      alert('successful register !');
    }
  }

  //Verify the password
  public onChangePassword(): boolean {

    if (this._cfPwd === this._pwd) {
      this._isHiddenBothPassword = true;
      return true;

    } else {
      this._isHiddenBothPassword = false;
      return false;

    }
  }

  public onChangeEmail(): boolean {
    if (this._email === '') {
      this._isHiddenEmail = false;
      return false;
    } else {
      this._isHiddenEmail = true;
      return true;
    }
  }


  get pwd(): string {
    return this._pwd;
  }

  get cfPwd(): string {
    return this._pwd;
  }

  get isHiddenBothPassword(): boolean {
    return this._isHiddenBothPassword;
  }

  get isHiddenEmail(): boolean {
    return this._isHiddenEmail;
  }

  get email(): string {
    return this._email;
  }

}
