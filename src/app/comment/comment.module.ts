import { ChannelTableComponent } from './channel-table/channel-table.component';
import { ChannelactivityTableComponent } from './channelactivity-table/channelactivity-table.component';
import { ChannelavgTableComponent } from './channelavg-table/channelavg-table.component';
import { EverydayTableComponent } from './every-table/everyday-table.component';
import { ChannelmanagetableComponent } from './channelmanage-table/channelmanage-table.component';
import { ChannelmanageProfileComponent } from './channelmanage-profile/channelmanage-profile.component';
import { ChannelchartTableComponent } from './channelchart-table/channelchart-table.component';
import { UserchartTableComponent } from './userchart-table/userchart-table.component';
import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { PaginationModule, ModalModule,DatepickerModule } from 'ng2-bootstrap';
import { EverychartTableComponent } from './everychart-table/everychart-table.component';
import { WalletchartTableComponent } from './walletchart-table/walletchart-table.component';
import { RouterModule } from '@angular/router';
import { commentRoutes } from './comment.routes';
import { CommentComponent } from './comment.component';
import { DoHttp} from '../bootstarp/doHttp';
import {WalletoutTableComponent } from './walletout-table/walletout-table.component';
import { OlduserTableComponent } from './olduser-table/olduser-table.component';
import { AfterUserTableComponent } from './afteruser-table/afteruser-table.component';
import { OperatingTableComponent } from './operating-table/operating-table.component';
import { QueryuserTableComponent } from './queryuser-table/queryuser-table.component';
import { TxlistTableComponent } from './queryuser-table/txlist-table/txlist-table.component';
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    DatepickerModule.forRoot(),
    PaginationModule.forRoot(),
    ModalModule.forRoot(),
    RouterModule.forChild(commentRoutes)
  ],
  declarations: [
    CommentComponent,
    ChannelTableComponent,
    ChannelactivityTableComponent,
    ChannelavgTableComponent,
    EverydayTableComponent,
    ChannelmanagetableComponent,
    ChannelmanageProfileComponent,
    ChannelchartTableComponent,
    UserchartTableComponent,
    EverychartTableComponent,
    WalletchartTableComponent,
    WalletoutTableComponent,
    OlduserTableComponent,
    AfterUserTableComponent,
    OperatingTableComponent,
    QueryuserTableComponent,
    TxlistTableComponent
  ]
})
export class CommentModule { 
}
