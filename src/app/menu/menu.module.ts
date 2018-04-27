import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { SharedModule } from '../shared/shared.module';
import { PaginationModule, ModalModule, DatepickerModule } from 'ng2-bootstrap';
import { RouterModule } from '@angular/router';
import { menuRoutes } from './menu.routes';
import { MenuProfileComponent } from './menu-profile/menu-profile.component';
import { MenuTableComponent } from './menu-table/menu-table.component';
import { FormControlComponent } from './menu-profile/dynamic-form/form-control.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PaginationModule.forRoot(),
    DatepickerModule.forRoot(),
    ModalModule.forRoot(),
    RouterModule.forChild(menuRoutes)
  ],
  declarations: [
     MenuComponent,
     MenuProfileComponent,
     MenuTableComponent,
    FormControlComponent
  ]
})
export class MenuModule { }
