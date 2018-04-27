import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
@Component({
  selector: 'operating',
  templateUrl: './operating.component.html',
  styleUrls: ['./operating.component.scss']
})
export class OperatingComponent implements OnInit {

  constructor() { moment.locale('zh-cn');}
  
  ngOnInit() {
  		require("custom");
  }

}
