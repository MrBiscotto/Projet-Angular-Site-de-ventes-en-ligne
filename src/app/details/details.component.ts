import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import {MemberService} from '../member/member.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  public member$: Object ;

  constructor(private route: ActivatedRoute, private _memberService: MemberService) {
    this.route.params.subscribe( params => this.member$ = params.id );
  }

  ngOnInit() {

    this._memberService.getMember(this.member$).subscribe(
      data => this.member$ = data);

  }

}
