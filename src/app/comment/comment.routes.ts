import { CommentComponent } from './comment.component';
import { ChannelTableComponent } from './channel-table/channel-table.component';
import { ChannelchartTableComponent } from './channelchart-table/channelchart-table.component';
import { EverychartTableComponent } from './everychart-table/everychart-table.component';
import { WalletchartTableComponent } from './walletchart-table/walletchart-table.component';
import { UserchartTableComponent } from './userchart-table/userchart-table.component';
import { ChannelactivityTableComponent } from './channelactivity-table/channelactivity-table.component';
import {ChannelavgTableComponent} from'./channelavg-table/channelavg-table.component';
import {EverydayTableComponent}from './every-table/everyday-table.component' ;
import { ChannelmanagetableComponent } from './channelmanage-table/channelmanage-table.component';
import { ChannelmanageProfileComponent } from './channelmanage-profile/channelmanage-profile.component';
import {WalletoutTableComponent } from './walletout-table/walletout-table.component';
import { OlduserTableComponent } from './olduser-table/olduser-table.component';

import { AfterUserTableComponent } from './afteruser-table/afteruser-table.component';

import { OperatingTableComponent } from './operating-table/operating-table.component';
import { QueryuserTableComponent } from './queryuser-table/queryuser-table.component';
import { TxlistTableComponent } from './queryuser-table/txlist-table/txlist-table.component';
export const commentRoutes = [{
	path: '',
	component: CommentComponent,
	children: [
		{ path: '', redirectTo: 'channeltable/page/1', pathMatch: 'full' },
		{ path: 'channeltable/page/:page', component: ChannelTableComponent },
		{ path: '', redirectTo: 'channelcharttable/page/1', pathMatch: 'full' },
		{ path: 'channelcharttable/page/:page', component: ChannelchartTableComponent },
		{ path: 'everycharttable', component: EverychartTableComponent },
		{ path: 'walletcharttable', component: WalletchartTableComponent },
		{ path: '', redirectTo: 'usercharttable/page/1', pathMatch: 'full' },
		{ path: 'usercharttable/page/:page', component: UserchartTableComponent },
		{ path: '', redirectTo: 'channeltable/page/1', pathMatch: 'full' },
		{ path: 'channelactivitytable/page/:page', component: ChannelactivityTableComponent },
		{ path: '', redirectTo: 'channelavgtable/page/1', pathMatch: 'full' },
		{ path: 'channelavgtable/page/:page', component: ChannelavgTableComponent },
		{ path: '', redirectTo: 'everydaytable/page/1', pathMatch: 'full' },
		{ path: 'everydaytable/page/:page', component: EverydayTableComponent },
		{ path: '', redirectTo: 'channelmanagetable/page/1', pathMatch: 'full' },
		{ path: 'channelmanagetable/page/:page', component: ChannelmanagetableComponent },
		{ path: 'channelmanagetable/editchannel/:id', component: ChannelmanageProfileComponent },
        { path: 'channelmanagetable/newchannel', component: ChannelmanageProfileComponent },
        { path: '', redirectTo: 'walletouttable/page/1', pathMatch: 'full' },
		{ path: 'walletouttable/page/:page', component: WalletoutTableComponent },
		{ path: 'oldusertable', component:OlduserTableComponent},
        { path: '', redirectTo: 'afterusertable/page/1', pathMatch: 'full' },
		{ path: 'afterusertable/page/:page', component:AfterUserTableComponent },
		{ path: 'operatingtable', component:OperatingTableComponent },
		{ path: 'queryusertable', component:QueryuserTableComponent },
		{ path: 'queryusertable/txlist/type/:type/page/:page/id/:id', component:TxlistTableComponent},
	]
}];
