import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  private _pwd: string;
  private _cfPwd: string;
  private _btnEnable: boolean;
  private _email: string;

  private emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';

  // btnEnable = false;

  private _isHiddenBothPassword = true;
  private _isHiddenEmail = true;

  constructor() { }

  ngOnInit() {
    this._btnEnable = false;
    this._isHiddenEmail = true;
    this._isHiddenBothPassword = true;
  }

  /*onSubmit() {
    fsdqfsfqs
  }*/


  public onChangePassword() {
    if (this._cfPwd === this._pwd) {
      this._btnEnable = true;
      console.log(this._cfPwd + ' , ' + this._pwd);
      this._isHiddenBothPassword = true;

    } else {
      // alert('Ensure both passwords match');
      this._isHiddenBothPassword = false;
      this._btnEnable = false;
    }
  }

  public onChangeEmail() {
    if (this._email == null) {
      this._isHiddenEmail = false;
    } else {
      this._isHiddenEmail = true;
    }
  }


  get pwd(): string {
    return this._pwd;
  }

  get cfPwd(): string {
    return this._pwd;
  }

  get btnEnable(): boolean {
    return this._btnEnable;
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
