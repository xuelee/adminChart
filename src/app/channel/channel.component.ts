import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
@Component({
  selector: 'channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.scss']
})

export class ChannelComponent implements OnInit {

  constructor() { moment.locale('zh-cn');}

  ngOnInit() {
  		//require("bootstrap-select");
  		require("custom");
  }

}
