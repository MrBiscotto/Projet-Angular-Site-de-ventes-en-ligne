import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MemberService} from '../../member/member.service';
import {AuctionedObjectComponent} from '../auctioned-object.component';
import {AuctionedObjectService} from '../auctioned-object.service';

@Component({
  selector: 'app-object-detail',
  templateUrl: './object-detail.component.html',
  styleUrls: ['./object-detail.component.scss']
})
export class ObjectDetailComponent implements OnInit {

  public object$: Object ;
  public member$: Object ;

  constructor(private route: ActivatedRoute, private _objectService: AuctionedObjectService, private _memberService: MemberService) {
    this.route.params.subscribe( params => this.object$ = params.id );
  }

  ngOnInit() {

    console.log('WTF: ' + this.object$);
    this._objectService.getObject(this.object$).subscribe(
      data => this.object$ = data);

    /*this._memberService.getMember(1).subscribe(
      data => this.member$ = data);*/

   }
  }


