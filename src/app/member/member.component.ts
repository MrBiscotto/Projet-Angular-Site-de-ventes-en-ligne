import {Component, Injectable, OnInit} from '@angular/core';
import {MemberService} from './member.service';
import {animate, query, stagger, style, transition, trigger} from '@angular/animations';



@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss'],
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


export class MemberComponent implements OnInit {

  public members = [];

  constructor(private _memberService: MemberService) { }


  ngOnInit() {
    this._memberService.getMembers()
      .subscribe(data => this.members = data);
  }



}
