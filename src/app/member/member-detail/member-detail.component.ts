import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MemberService} from '../member.service';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.scss']
})
export class MemberDetailComponent implements OnInit {

  public member$: Object ;
  private id$: Object;

  constructor(private route: ActivatedRoute, private _memberService: MemberService) {
    this.route.params.subscribe( params => this.member$ = params.id );
  }

  ngOnInit() {
    this.id$ = this.member$;
    this._memberService.getMember(this.member$).subscribe(
      data => this.member$ = data);

  }


  deleteMember() {
    this._memberService.deleteMember(this.id$).subscribe();
  }

}
