import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-add-auction',
  templateUrl: './add-auction.component.html',
  styleUrls: ['./add-auction.component.scss']
})
export class AddAuctionComponent implements OnInit {

  currentUrl: string;
  private _name: string;
  private _isHiddenName: boolean;

  constructor(private router: Router) {
    router.events.subscribe((_: NavigationEnd) => this.currentUrl = _.url);
  }

  ngOnInit() {
    this._isHiddenName = true;
  }

  public onChangeName(): void {
    if (this._name == '') {
      this._isHiddenName = false;
    }
    this._isHiddenName = true;
  }
  get isHiddenName(): boolean {
    return this._isHiddenName;
  }

  get name(): string {
    return this._name;
  }

}
