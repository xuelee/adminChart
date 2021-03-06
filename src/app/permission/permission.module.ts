import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { PaginationModule, ModalModule } from 'ng2-bootstrap';
import { RouterModule } from '@angular/router';
import { permissionRoutes } from './permission.routes';
import { PermissionComponent } from './permission.component';
import { PermissionTableComponent } from './permission-table/permission-table.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PaginationModule.forRoot(),
    ModalModule.forRoot(),
    RouterModule.forChild(permissionRoutes)
  ],
  declarations: [
    PermissionComponent,
    PermissionTableComponent
  ]
})
export class PermissionModule { }
