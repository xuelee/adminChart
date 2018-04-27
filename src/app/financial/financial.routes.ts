import { FinancialComponent } from './financial.component';
import { OrderComponent } from './order-table/order-table.component';
import { UserInfoComponent } from './userInfo-table/userInfo-table.component';
import { TradComponent } from './trad-table/trad-table.component';
import { ExpuserComponent}from './expuser-table/expuser-table.component';
import { ExpitemComponent}from './expuser-table/expuser-item.component';
import { UserwalletComponent}from './userwallet-table/userwallet-table.component'
export const financialRoutes = [{
	path: '',
	component: FinancialComponent,
	children: [
		{ path: '', redirectTo: 'ordertable/page/1', pathMatch: 'full' },
		{ path: 'ordertable/page/:page', component: OrderComponent },
		{ path: '', redirectTo: 'userinfotable/page/1', pathMatch: 'full' },
		{ path: 'userinfotable/page/:page', component: UserInfoComponent },
		{ path: '', redirectTo: 'tradtable/page/1', pathMatch: 'full' },
		{ path: 'tradtable/page/:page', component: TradComponent },
		{ path: '', redirectTo: 'expusertable/page/1', pathMatch: 'full' },
		{ path: 'expusertable/page/:page', component: ExpuserComponent },
		{ path: 'expitemtable/id/:id', component: ExpitemComponent },
		{ path: '', redirectTo: 'userwallettable/page/1', pathMatch: 'full' },
		{ path: 'userwallettable/page/:page', component: UserwalletComponent },
	]
}];
