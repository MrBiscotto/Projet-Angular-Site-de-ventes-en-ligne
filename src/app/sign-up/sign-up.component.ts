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

  btnEnable = false;
  constructor() { }

  ngOnInit() {
  }

  onSubmit() {

  }

  onChange() {

    if (this.cfPwd === this.pwd) {
      this.btnEnable = true;
      console.log(this.cfPwd + ' , ' + this.pwd);

    } else {
      alert('This is not the same password');

      this.btnEnable = false;

    }

  }

}
