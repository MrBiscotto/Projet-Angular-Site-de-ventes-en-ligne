import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MemberService} from '../../member/member.service';
import {AuctionedObjectComponent} from '../auctioned-object.component';
import {AuctionedObjectService} from '../auctioned-object.service';
import {CookieService} from 'ngx-cookie-service';
import {SellerService} from '../../add-auction/SellerService/seller.service';

@Component({
  selector: 'app-object-detail',
  templateUrl: './object-detail.component.html',
  styleUrls: ['./object-detail.component.scss']
})
export class ObjectDetailComponent implements OnInit {

  public object$: Object ;
  private member$: Object ;
  private _sellers = [];
  private _seller: string;


  constructor(private route: ActivatedRoute, private _cookieService: CookieService,
              private _objectService: AuctionedObjectService, private _memberService: MemberService, private _sellerService: SellerService) {
    this.route.params.subscribe( params => this.object$ = params.id );
  }

  ngOnInit() {


    this._objectService.getObject(this.object$).subscribe(
      data => this.object$ = data);

    this._memberService.getMember(Number(this._cookieService.get('login')))
      .subscribe(data2 => this.member$ = data2);

    this._sellerService.getSellers()
      .subscribe(data3 => this._sellers = data3);

    this.sellerUser();

   }


   public sellerUser(){
    for(const seller of this._sellers){
      if(Number(this._cookieService.get('login')) === seller.idUser){
        this._seller = seller.username;
        break;
      }
    }
   }

  }


