import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { PaginationModule, ModalModule,DatepickerModule } from 'ng2-bootstrap';
import { RouterModule } from '@angular/router';
import { channelRoutes } from './channel.routes';
import { ChannelComponent } from './channel.component';
import { ChannelDayChartComponent } from './channeldaychart-table/channeldaychart-table.component';
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    DatepickerModule.forRoot(),
    PaginationModule.forRoot(),
    ModalModule.forRoot(),
    RouterModule.forChild(channelRoutes)
  ],
  declarations: [
    ChannelComponent,
    ChannelDayChartComponent,
  ]
})
export class ChannelModule { 
}
