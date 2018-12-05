import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MemberService} from '../member.service';


export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.scss']
})
export class MemberDetailComponent implements OnInit {

  private member$: Object ;
  private id$: Object;

  animal: string;
  name: string;


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

