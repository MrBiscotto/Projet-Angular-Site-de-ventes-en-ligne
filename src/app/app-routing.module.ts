import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {AddAuctionComponent} from './add-auction/add-auction.component';
import {MemberComponent} from './member/member.component';
import {AuctionedObjectComponent} from './auctioned-object/auctioned-object.component';
import {ObjectDetailComponent} from './auctioned-object/object-detail/object-detail.component';
import {MemberDetailComponent} from './member/member-detail/member-detail.component';
import {SoldObjectComponent} from './sold-object/sold-object.component';



const routes: Routes = [{
  path: '',
  component: SignUpComponent,
  pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'member-detail/:id',
    component: MemberDetailComponent
  },
  {
    path: 'object-detail/:id',
    component: ObjectDetailComponent
  },
  {
    path: 'add-auction',
    component : AddAuctionComponent
  },
  {
    path: 'member',
    component : MemberComponent
  },
  {
    path: 'soldObject',
    component : SoldObjectComponent
  },
  {
    path: 'auctioned-object',
    component : AuctionedObjectComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
