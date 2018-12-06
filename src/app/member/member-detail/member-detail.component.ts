import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MemberService} from '../member.service';
import {ModeratorService} from '../moderator.service';


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

  private _member$: Object ;
  private _id$: Object;
  private _idModo$: number;
  private _idUser: number;
  private _moderators = [];
  private _up = false;
  private _del = false;

  animal: string;
  name: string;


  constructor(private route: ActivatedRoute, private _memberService: MemberService,
              private _moderatorService: ModeratorService, private router: Router) {
    this.route.params.subscribe( params => this._member$ = params.id );
  }

  ngOnInit() {

    this._id$ = this._member$;
    this._idUser = Number(this._id$);

    this._moderatorService.getModerators()
      .subscribe(data => this._moderators = data);

    this._memberService.getMember(this._member$).subscribe(
      data => this._member$ = data);

  }

  public upgradeModo() {

    for(const modo of this._moderators) {
      console.log('ADD ***********');
      console.log('idUser : ' + this._idUser + '   id modo : ' + modo.idUser);
      console.log('***********');
      if(this._idUser === modo.idUser) {
        this._idModo$ = modo.idModerator;
        this._up = true;
        alert('Already Moderator !');
        break;
      }
    }

    if(this._up === false) {
      this._moderatorService.addModo(this._id$).subscribe();
      this.router.navigate(['member']);
      alert('Action performed !');
    }


  }


  public deleteModo(){

    for(const modo of this._moderators) {
      console.log('DELETE ***********');
      console.log('idUser : ' + this._idUser + '   id modo : ' + modo.idUser);
      console.log('***********');
      if(this._idUser === modo.idUser) {
        this._idModo$ = modo.idModerator;
        this._del = true;
        console.log('IDMODO_V2 / ' + this._idModo$);
        this._moderatorService.deleteModerator(this._idModo$).subscribe();
        this.router.navigate(['member']);
        alert('Action performed !');
        break;
      }
    }

    if(this._del === false){
      alert('The member is not a moderator !');
    }



  }


  public deleteMember() {
    this._memberService.deleteMember(this._id$).subscribe();

    for(const modo of this._moderators) {
      if(this._idUser === modo.idUser) {
        this._idModo$ = modo.idModerator;
        this._moderatorService.deleteModerator(this._idModo$).subscribe();
        break;
      }
    }
    this.router.navigate(['member']);
    alert('Action performed !');
  }

}

