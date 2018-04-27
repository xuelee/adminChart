import { Component, OnInit } from '@angular/core';
import { Constant } from '../models/constant-model';
@Component({
  selector: 'left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.scss']
})
export class LeftNavComponent implements OnInit {
  public c = new Constant();
  public list: Array<JSON> = new Array;
  roles = {};
  index = {};
  constructor() { }
  ngOnInit() {
  let l = JSON.parse(this.c.local['menu']);
    for(let i=0;i<l.length;i++){
      if(l[i].urlkey == 'index'){
        this.index = l[i];
      }else{
        this.list.push(l[i]);
      }
    }
    this.getRoles(l);
  	require("custom");
  }
   getRoles(list){
    for(let i=0;i<list.length;i++){
      this.roles[list[i].urlkey]=true;
      this.c.setLocalItem("rolelist",JSON.stringify(this.roles));
      if(list[i].childMenu != null && list[i].childMenu.length>0){
        this.getRoles(list[i].childMenu);
      }
    } 
  }
}
