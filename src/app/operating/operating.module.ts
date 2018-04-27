import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { PaginationModule, ModalModule,DatepickerModule } from 'ng2-bootstrap';
import { RouterModule } from '@angular/router';
import { operatingRoutes } from './operating.routes';
import { OperatingComponent } from './operating.component';
import { UserInfoComponent } from './userinfo-table/userinfo-table.component';
import { TxhkComponent } from './txhk-table/txhk-table.component';
import { DaychartComponent } from './daychart-table/daychart-table.component';
import { ProjectchartComponent } from './projectchart-table/projectchart-table.component';
import { SalesComponent } from './sales-table/sales-table.component';
import { InvestComponent } from './invest-table/invest-table.component';
import { WalletchartComponent } from './walletchart-table/walletchart-table.component';
import { WalletzxbComponent } from './walletzxb-table/walletzxb-table.component';
import { WalletvipComponent } from './walletvip-table/walletvip-table.component';
import { DatePanelDirective } from '../directive/datepanel.directive';
import {OperatingMonthComponent} from './operatingmonth-table/operatingmonth-table.component';
import { MonthtopComponent} from './monthtop-table/monthtop-table.component';
import { MonthprovinceComponent} from './monthprovince-table/monthprovince-table.component';
import { MonthageComponent} from './monthage-table/monthage-table.component';
import { PlatformTableComponent} from './platform/platform-table/platform-table.component';
import { PlatformProfileComponent} from './platform/platform-profile/platform-profile.component';
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    DatepickerModule.forRoot(),
    PaginationModule.forRoot(),
    ModalModule.forRoot(),
    RouterModule.forChild(operatingRoutes)
  ],
  declarations: [
    OperatingComponent,
    UserInfoComponent,
    TxhkComponent,
    DaychartComponent,
    ProjectchartComponent,
    SalesComponent,
    InvestComponent,
    WalletchartComponent,
    WalletzxbComponent,
    WalletvipComponent,
    DatePanelDirective,
    OperatingMonthComponent,
    MonthtopComponent,
    MonthprovinceComponent,
    MonthageComponent,
    PlatformTableComponent,
    PlatformProfileComponent
  ]
})
export class OperatingModule { 
}
