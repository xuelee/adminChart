import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { flyIn } from '../../animations/fly-in';
import { BrowserModule } from '@angular/platform-browser';
import { Headers, Http } from '@angular/http';
import { Constant } from '../../models/constant-model';
@Component({
  selector: 'role-table',
  templateUrl: './role-table.component.html',
  styleUrls: ['./role-table.component.scss'],
  animations: [
    flyIn
  ]
})
export class RoleTableComponent implements OnInit {
    public constant: Constant = new Constant();
	  public maxSize:number = 10;
    public itemsPerPage:number=10;
    public totalItems:number = 0;
    public currentPage:number = 1;
    public list: Array<JSON> = new Array;
    search = {'userName':''};
    errorMessage: string;
  constructor(public http:Http,
    public activeRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activeRoute.params.subscribe(
      params => this.getListByPage(params['page'])
    );
  }
  public getListByPage(page:number):void{
    let req = "token="+this.constant.local['token'];
     var header = new Headers();
     header.append('Content-Type', 'application/x-www-form-urlencoded');
     this.http.get(this.constant.root+"ydmgmt/api/user/queryRole?"+req, {headers: header})
     .map(res => res.json()).subscribe(data=> {
         this.constant.checkCode(data.code);
         if(data.code == "0"){
            this.list = data.result;

          }else{
            this.errorMessage=data.errorMsg
          }
     }),
     err => this.errorMessage="系统异常",
     () => console.log('Register Complete');
  }
  blockUser(id: number){

  }
  unBlockUser(id: number){

  }
  resetPwd(id: number){

  }
}
