import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelpopComponent } from './modelpop.component';
import { PaginationModule, ModalModule, DatepickerModule } from 'ng2-bootstrap';
import { RouterModule } from '@angular/router';
import { modelpopRoutes } from './modelpop.routes';
import { SharedModule } from '../shared/shared.module';
import { TxlistTableComponent } from './txlist-table/txlist-table.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PaginationModule.forRoot(),
    DatepickerModule.forRoot(),
    ModalModule.forRoot(),
    RouterModule.forChild(modelpopRoutes)
  ],
  declarations: [
    ModelpopComponent,
    TxlistTableComponent
  ]
})
export class ModelpopModule { }
