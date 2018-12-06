import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MemberService} from '../../member/member.service';
import {AuctionedObjectComponent} from '../auctioned-object.component';
import {AuctionedObjectService} from '../auctioned-object.service';
import {CookieService} from 'ngx-cookie-service';
import {SellerService} from '../../add-auction/SellerService/seller.service';
import {SoldObjectService} from '../../sold-object/sold-object.service';

@Component({
  selector: 'app-object-detail',
  templateUrl: './object-detail.component.html',
  styleUrls: ['./object-detail.component.scss']
})
export class ObjectDetailComponent implements OnInit {

  public object$: Object ;
  private _objects = [];
  private _objId: number;
  private member$: Object ;
  private _sellers = [];
  private _seller: string;
  private _idSeller: number;
  private _nbSales: number;
  private _pVotes: number;
  private _nVotes: number;
  private _green = false;
  private _red = false;


  constructor(private _route: ActivatedRoute, private _cookieService: CookieService,
              private _soldObjectService: SoldObjectService, private _router: Router,
              private _objectService: AuctionedObjectService, private _memberService: MemberService, private _sellerService: SellerService) {
    this._route.params.subscribe( params => this.object$ = params.id );
    this._route.params.subscribe(params => this._objId = params.id);
  }

  ngOnInit() {

  this._objectService.getObjects().subscribe(
    data4 => this._objects = data4);

    this._objectService.getObject(this.object$).subscribe(
      data => this.object$ = data);

    this._memberService.getMember(Number(this._cookieService.get('login')))
      .subscribe(data2 => this.member$ = data2);

    this._sellerService.getSellers()
      .subscribe(data3 => {
        this._sellers = data3;
        this.sellerUser(); // here
      });

   }

   public buyObject(){

    for (const obj of this._objects) {
      if (obj.idObject === Number(this._objId)) {
        this._objectService.deleteObject(obj.idObject).subscribe();
        this._soldObjectService.addSoldObject(obj.priceObject, obj.nameObject, obj.catObject).subscribe();
        this._router.navigate(['auctioned-object']);
        alert('Purchase made successfully !');
        break;
      }
    }
   }


    public green() {
    if(this.userAccess() === true) {

      let idUser = 0;
      let username: string;
      let nbSales: number;
      let pVotes: number;
      let nVotes: number;

      for (const obj of this._objects) {
        if (obj.idObject === Number(this._objId)) {
          idUser = obj.idUser;
          break;
        }
      }

      for(const seller of this._sellers){

        if(seller.idUser === idUser){
          username = seller.username;
          nbSales = seller.nbSales;
          pVotes = seller.positiveVote;
          nVotes = seller.negativeVote;
          pVotes ++;

          this._sellerService.updateSeller(username, nbSales, pVotes, nVotes, idUser).subscribe();
          this._green = true;
          this._red = true;
          alert('rated note !');
          break;
        }
      }

    }
    }

  public red(){
    if(this.userAccess() === true) {

      let idUser = 0;
      let username: string;
      let nbSales: number;
      let pVotes: number;
      let nVotes: number;

      for (const obj of this._objects) {
        if (obj.idObject === Number(this._objId)) {
          idUser = obj.idUser;
          break;
        }
      }

      for (const sell of this._sellers) {
        if (sell.idUser === idUser) {
          username = sell.username;
          nbSales = sell.nbSales;
          pVotes = sell.positiveVote;
          nVotes = sell.negativeVote;
          nVotes ++;

          this._sellerService.updateSeller(username, nbSales, pVotes, nVotes, idUser).subscribe();
          this._green = true;
          this._red = true;
          alert('rated note !');
          break;
        }
      }
    }
  }

public userAccess(): boolean {
  const cookieExists: boolean = this._cookieService.check('login');

  if (cookieExists === true) {
  return true;
} else {
    this._router.navigate(['login']);
     alert('You must be connected !');
  return false;
}
}

   public sellerUser(){

    for (const obj of this._objects){
      if (obj.idObject === Number(this._objId)) {
        this._idSeller = obj.idUser;
        break;
      }
    }


    for (const seller of this._sellers ) {
      if (seller.idUser === this._idSeller) {
        this._seller = seller.username;
        this._nbSales = seller.nbSales;
        this._pVotes = seller.positiveVote;
        this._nVotes = seller.negativeVote;
        break;
      }
    }
   }

  }


