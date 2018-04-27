import { MenuComponent } from './menu.component';
import { MenuTableComponent } from './menu-table/menu-table.component';
import { MenuProfileComponent } from './menu-profile/menu-profile.component';

export const menuRoutes = [{
	path: '',
	component: MenuComponent,
	children: [
		{ path: '', redirectTo: 'menutable/page/1', pathMatch: 'full' },
		{ path: 'menutable/page/:page', component: MenuTableComponent },
        { path: 'menutable/editmenu/:id', component: MenuProfileComponent },
        { path: 'menutable/newmenu', component: MenuProfileComponent },
	]
}];
