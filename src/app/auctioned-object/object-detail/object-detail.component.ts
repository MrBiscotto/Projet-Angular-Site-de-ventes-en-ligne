import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MemberService} from '../../member/member.service';
import {AuctionedObjectComponent} from '../auctioned-object.component';
import {AuctionedObjectService} from '../auctioned-object.service';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-object-detail',
  templateUrl: './object-detail.component.html',
  styleUrls: ['./object-detail.component.scss']
})
export class ObjectDetailComponent implements OnInit {

  public object$: Object ;
  private member$: Object ;

  constructor(private route: ActivatedRoute, private _cookieService: CookieService, private _objectService: AuctionedObjectService, private _memberService: MemberService) {
    this.route.params.subscribe( params => this.object$ = params.id );
  }

  ngOnInit() {


    this._objectService.getObject(this.object$).subscribe(
      data => this.object$ = data);

    this._memberService.getMember(Number(this._cookieService.get('login')))
      .subscribe(data2 => this.member$ = data2);

   }
  }


