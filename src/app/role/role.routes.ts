import { RoleComponent } from './role.component';
import { RoleTableComponent } from './role-table/role-table.component';
import { RoleProfileComponent } from  './role-profile/role-profile.component';
export const roleRoutes = [{
	path: '',
	component: RoleComponent,
	children: [
		{ path: '', redirectTo: 'roletable/page/1', pathMatch: 'full' },
		{ path: 'roletable/page/:page', component: RoleTableComponent },
		{ path: 'roletable/bindmenu/:id', component: RoleProfileComponent },
	]
}];
