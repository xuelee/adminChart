import { OrderComponent } from './order-table/order-table.component';
import { UserInfoComponent } from './userInfo-table/userInfo-table.component';
import { TradComponent } from './trad-table/trad-table.component';
import { ExpuserComponent}from './expuser-table/expuser-table.component';
import { UserwalletComponent}from './userwallet-table/userwallet-table.component'
import { ExpitemComponent}from './expuser-table/expuser-item.component';
import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { PaginationModule, ModalModule,DatepickerModule } from 'ng2-bootstrap';

import { RouterModule } from '@angular/router';
import { financialRoutes } from './financial.routes';
import { FinancialComponent } from './financial.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    DatepickerModule.forRoot(),
    PaginationModule.forRoot(),
    ModalModule.forRoot(),
    RouterModule.forChild(financialRoutes)
  ],
  declarations: [
    FinancialComponent,
    OrderComponent,
    UserInfoComponent,
    TradComponent,
    ExpuserComponent,
    UserwalletComponent,
    ExpitemComponent
  ]
})
export class FinancialModule { 
}
