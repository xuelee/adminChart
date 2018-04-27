import { ModelpopComponent } from './modelpop.component';
import { TxlistTableComponent } from './txlist-table/txlist-table.component';

export const modelpopRoutes = [{
	path: '',
	component: ModelpopComponent,
	children: [
		{ path: 'txlist/type/:type/page/:page/id/:id', component:TxlistTableComponent},
	]
}];
