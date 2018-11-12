import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  pwd: string;
  cfPwd: string;
  btnEnable: boolean;

  //btnEnable = false;

  private _isHidden = true;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
      alert("Incroyable");
      //this.onChange();
  }

  onChange() {

    if (this.cfPwd === this.pwd) {
      this.btnEnable = true;
      console.log(this.cfPwd + ' , ' + this.pwd);
      this._isHidden = true;

    } else {
      //alert('Ensure both passwords match');
      this._isHidden = false;

      this.btnEnable = false;

    }

  }

  get isHidden():boolean{
    return this._isHidden;
  }

}
