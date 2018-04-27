import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
@Component({
  selector: 'financial',
  templateUrl: './financial.component.html',
  styleUrls: ['./financial.component.scss']
})
export class FinancialComponent implements OnInit {

  constructor() { moment.locale('zh-cn');}

  ngOnInit() {
  }

}
