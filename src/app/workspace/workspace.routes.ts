import { WorkspaceComponent } from './workspace.component';

export const workspaceRoutes = [
	{
		path: '',
		component: WorkspaceComponent,
		children: [
			{ path: '', redirectTo: 'post', pathMatch: 'full' },
			{ path: 'post', loadChildren: '../post/post.module#PostModule' },
			{ path: 'comment', loadChildren: '../comment/comment.module#CommentModule' },
			{ path: 'financial', loadChildren: '../financial/financial.module#FinancialModule' },
			{ path: 'operating', loadChildren: '../operating/operating.module#OperatingModule' },
			{ path: 'channel', loadChildren: '../channel/channel.module#ChannelModule' },
			{ path: 'user', loadChildren: '../user/user.module#UserModule' },
			{ path: 'role', loadChildren: '../role/role.module#RoleModule' },
			{ path: 'menu', loadChildren: '../menu/menu.module#MenuModule' },
			{ path: 'permission', loadChildren: '../permission/permission.module#PermissionModule' },
			{ path: 'sys', loadChildren: '../sys/sys.module#SysModule' },
			{ path: 'map', loadChildren: '../map/map.module#MapModule' }
		]
	}
];
