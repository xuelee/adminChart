import { ChannelComponent } from './channel.component';
import { ChannelDayChartComponent } from './channeldaychart-table/channeldaychart-table.component';
export const channelRoutes = [{
	path: '',
	component: ChannelComponent,
	children: [
		{ path: 'channeldaycharttable', component: ChannelDayChartComponent },
	]
}];
