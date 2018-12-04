import {Component, Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IMember} from './IMember';
import {Observable} from 'rxjs';
import {MemberService} from './member.service';
import {animate, query, stagger, style, transition, trigger} from '@angular/animations';
import {DataService} from '../data.service';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})


export class MemberComponent implements OnInit {

  public members = [];

  constructor(private _memberService: MemberService) { }


  ngOnInit() {
    this._memberService.getMembers()
      .subscribe(data => this.members = data);
  }




}
