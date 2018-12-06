import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailsComponent } from './details/details.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AddAuctionComponent } from './add-auction/add-auction.component';
import { MemberComponent } from './member/member.component';
import { AuctionedObjectComponent } from './auctioned-object/auctioned-object.component';
import { ObjectDetailComponent } from './auctioned-object/object-detail/object-detail.component';
import { MemberDetailComponent } from './member/member-detail/member-detail.component';
import { CookieService } from 'ngx-cookie-service';
import { SoldObjectComponent } from './sold-object/sold-object.component';


@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    SidebarComponent,
    SignUpComponent,
    LoginComponent,
    AddAuctionComponent,
    MemberComponent,
    AuctionedObjectComponent,
    ObjectDetailComponent,
    MemberDetailComponent,
    SoldObjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent],
  providers: [ CookieService ]
})
export class AppModule { }
