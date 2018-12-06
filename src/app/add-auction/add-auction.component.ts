import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {isNumber} from 'util';
import {AuctionedObjectService} from '../auctioned-object/auctioned-object.service';
import {CookieService} from 'ngx-cookie-service';
import {SellerService} from './SellerService/seller.service';

@Component({
  selector: 'app-add-auction',
  templateUrl: './add-auction.component.html',
  styleUrls: ['./add-auction.component.scss']
})
export class AddAuctionComponent implements OnInit {

  currentUrl: string;
  private _name: string;
  private _description: string;
  private _isHiddenName: boolean;
  private _isHiddenPrice: boolean;
  private _price: number;
  private _cat: string;
  private _seller$: Object;
  private _sellers = [];
  private _sellExist = false;

  constructor(private router: Router, private _objectService: AuctionedObjectService,
              private _cookieService: CookieService, private _sellerService: SellerService) {
    router.events.subscribe((_: NavigationEnd) => this.currentUrl = _.url);
  }

  ngOnInit() {
    this._isHiddenName = true;
    this._isHiddenPrice = true;
    this._sellerService.getSellers()
      .subscribe(data => this._sellers = data);
  }


  public onSelect(val: string) {
    this._cat = val;
  }

  // Add sell object
  public onAddObject(user: string) {
    /*Add seller object*/

    // Add member seller
    if (this.onChangeName() === true && this.onChangePrice() === true && this._cat !== '') {

      for (const s of this._sellers) {

        if (s.idUser === Number(this._cookieService.get('login'))) {
          console.log('UDPATE');
          const newSales = s.nbSales + 1;
          console.log('UDPATE SELLER / ' + s.username.valueOf() +' ' + newSales +' '+  s.positiveVote+' '+ s.negativeVote+' '+ s.idUser);

          //UPDATE MY SELLER_USER HERE ****
          this._sellerService.updateSeller(s.username.valueOf(), newSales, s.positiveVote, s.negativeVote, s.idUser).subscribe();

          this._objectService.addObject(this._name, this._description, this._price,
            Number(this._cookieService.get('login')), this._cat).subscribe();

          this.router.navigate(['auctioned-object']);
          this._sellExist = true;
          break;
        }
      }

      if (this._sellExist === false) {

        console.log('NEW SELLER');
      this._sellerService.addSeller(this._cookieService.get('username'), 1, 0, 0,
        Number(this._cookieService.get('login'))).subscribe();

      this._objectService.addObject(this._name, this._description, this._price,
        Number(this._cookieService.get('login')), this._cat).subscribe();

      this.router.navigate(['auctioned-object']);

    }

  } else {
  alert('no selection in the drop-down list !');
  }

  }





  public onChangeName(): boolean {
    if (this._name === '') {
      this._isHiddenName = false;
      return false;
    } else {
      console.log('PAS VIDE ' + this._name );
      this._isHiddenName = true;
      return true;
    }
  }

  public onChangePrice(): boolean {
    if (!isNaN(this._price) || this._price === 0) {
      this._isHiddenPrice = true;
      return true;
    }
    this._isHiddenPrice = false;
    return false;
  }

}
