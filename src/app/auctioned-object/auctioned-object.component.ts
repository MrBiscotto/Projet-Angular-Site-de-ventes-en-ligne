import { Component, OnInit } from '@angular/core';
import {MemberService} from '../member/member.service';
import {AuctionedObjectService} from './auctioned-object.service';
import {animate, query, stagger, style, transition, trigger} from '@angular/animations';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-auctioned-object',
  templateUrl: './auctioned-object.component.html',
  styleUrls: ['./auctioned-object.component.scss'],
  animations: [
    trigger('listStagger', [
      transition('* <=> *', [
        query(
          ':enter',
          [
            style({ opacity: 0, transform: 'translateY(-15px)' }),
            stagger(
              '50ms',
              animate(
                '550ms ease-out',
                style({ opacity: 1, transform: 'translateY(0px)' })
              )
            )
          ],
          { optional: true }
        ),
        query(':leave', animate('50ms', style({ opacity: 0 })), {
          optional: true
        })
      ])
    ])
  ]
})
export class AuctionedObjectComponent implements OnInit {

  public objects = [];

  constructor(private _objectService: AuctionedObjectService) { }


  ngOnInit() {
    this._objectService.getObjects()
      .subscribe(data => this.objects = data);
  }
}
