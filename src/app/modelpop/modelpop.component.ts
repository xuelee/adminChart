import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'modelpop',
  templateUrl: './modelpop.component.html',
  styleUrls: ['./modelpop.component.scss']
})
export class ModelpopComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	require("custom");
  }

}
