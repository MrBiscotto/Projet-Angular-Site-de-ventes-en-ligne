import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { DetailsComponent } from './details/details.component';
import { PostsComponent } from './posts/posts.component';
import { LoginComponent } from './login/login.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {AddAuctionComponent} from './add-auction/add-auction.component';
import {MemberComponent} from './member/member.component';


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
  path: 'users',
  component: UsersComponent
  },
  {
    path: 'details/:id',
    component: DetailsComponent
  },
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: 'add-auction',
    component : AddAuctionComponent
  },
  {
    path: 'member',
    component : MemberComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
