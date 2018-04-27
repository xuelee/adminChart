import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { flyIn } from '../../animations/fly-in';
import { BrowserModule } from '@angular/platform-browser';
import { Headers, Http } from '@angular/http';
import { Constant } from '../../models/constant-model';
import { DateFormat } from '../../animations/dateFormat';
@Component({
  selector: 'expitemtable',
  templateUrl: './expuser-item.component.html',
  styleUrls: ['./expuser-table.component.scss'],
  animations: [
    flyIn
  ]
})
export class ExpitemComponent implements OnInit {
    public constant: Constant = new Constant();
    public numPages: number = 3;
    public maxSize: number = 10;
    public itemsPerPage: number = 10;
    public totalItems: number = 0;
    public currentPage: number = 1;
    public list: Array<JSON> = new Array;
    message: string;
    constructor(public router: Router,public http:Http,
      public activeRoute: ActivatedRoute) {
    }
    ngOnInit() {
      this.activeRoute.params.subscribe(
        params => this.getById(params['id'])
      );
    }
   public getById(id): void {
     var header = new Headers();
     header.append('Content-Type', 'application/x-www-form-urlencoded');
     this.list = [];
     this.message = "查询中，请稍后...";
     this.http.get(this.constant.root+"ydmgmt/api/finance/getIncorrectWalletUsersDeal?token="+this.constant.local['token']+"&queryUserId="+id, {headers: header})
     .map(res => res.json()).subscribe(data=> {
         if(data.code == "0"){
            this.list = data.result;
            this.message = "异常用户数据 - 个人明细";

          }else{
            this.message=data.errorMsg
          }
     }),
     err => this.message="系统异常",
     () => console.log('Register Complete');
  }
}
