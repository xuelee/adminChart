import { OperatingComponent } from './operating.component';
import { UserInfoComponent } from './userinfo-table/userinfo-table.component';
import { TxhkComponent } from './txhk-table/txhk-table.component';
import { DaychartComponent } from './daychart-table/daychart-table.component';
import { ProjectchartComponent } from './projectchart-table/projectchart-table.component';
import { SalesComponent } from './sales-table/sales-table.component';
import { InvestComponent } from './invest-table/invest-table.component';
import { WalletchartComponent} from './walletchart-table/walletchart-table.component';
import { WalletzxbComponent} from './walletzxb-table/walletzxb-table.component';
import { WalletvipComponent} from './walletvip-table/walletvip-table.component';
import { OperatingMonthComponent} from './operatingmonth-table/operatingmonth-table.component';
import { MonthtopComponent} from './monthtop-table/monthtop-table.component';
import { MonthprovinceComponent} from './monthprovince-table/monthprovince-table.component';
import { MonthageComponent} from './monthage-table/monthage-table.component';
import { PlatformTableComponent} from './platform/platform-table/platform-table.component';
import { PlatformProfileComponent} from './platform/platform-profile/platform-profile.component';

export const operatingRoutes = [{
	path: '',
	component: OperatingComponent,
	children: [
		{ path: 'userinformationtable', component: UserInfoComponent },
		{ path: 'txhktable', component: TxhkComponent },
		{ path: 'daycharttable', component: DaychartComponent },
		{ path: 'projecttable', component: ProjectchartComponent },
		{ path: 'salestable', component: SalesComponent },
		{ path: 'investtable', component: InvestComponent },
		{ path: 'walletcharttable', component: WalletchartComponent },
		{ path: 'walletzxbtable', component: WalletzxbComponent },
		{ path: 'walletviptable', component: WalletvipComponent },
		{ path: 'operatingmonthtable', component: OperatingMonthComponent },
		{ path: 'monthtoptable', component: MonthtopComponent },		
		{ path: 'monthprovincetable', component: MonthprovinceComponent },
		{ path: 'monthagetable', component: MonthageComponent },
		{ path: 'platformtable', component: PlatformTableComponent },
		{ path: 'newplatform', component: PlatformProfileComponent },
		{ path: 'editplatform/:id', component: PlatformProfileComponent },
	]
}];
