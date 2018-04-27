import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post.component';
import { RouterModule } from '@angular/router';
import { postRoutes } from './post.routes';
import { PostTableComponent } from './post-table/post-table.component';
import { WritePostComponent } from './write-post/write-post.component';
import { PostTableService } from './post-table/services/post-table.service';
import { PaginationModule, ModalModule } from 'ng2-bootstrap';
import { SharedModule } from '../shared/shared.module';
import { EChartOptionDirective1 } from './echart-option.directive';
@NgModule({
imports: [
    CommonModule,
    SharedModule,
    PaginationModule.forRoot(),
    ModalModule.forRoot(),
    RouterModule.forChild(postRoutes)
  ],
  declarations: [
    PostComponent,
    PostTableComponent,
    WritePostComponent,
    EChartOptionDirective1
  ],
  providers: [
    PostTableService
  ]
})
export class PostModule { }
