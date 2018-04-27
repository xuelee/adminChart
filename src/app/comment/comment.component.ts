import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
@Component({
  selector: 'comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  constructor() { moment.locale('zh-cn');}

  ngOnInit() {
  }

}
