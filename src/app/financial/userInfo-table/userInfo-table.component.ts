import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { flyIn } from '../../animations/fly-in';
import { BrowserModule } from '@angular/platform-browser';
import { Headers, Http } from '@angular/http';
import { Constant } from '../../models/constant-model';
import { DateFormat } from '../../animations/dateFormat';
@Component({
  selector: 'userinfotable',
  templateUrl: './userInfo-table.component.html',
  styleUrls: ['./userInfo-table.component.scss'],
  animations: [
    flyIn
  ]
})
export class UserInfoComponent implements OnInit {
    public constant: Constant = new Constant();
    public list: Array<JSON> = new Array;
    search = {'phone':''};
    message: string;
     down:string;
    constructor(public router: Router,public http:Http,
      public activeRoute: ActivatedRoute) {
    }
    ngOnInit() {
      // this.activeRoute.params.subscribe(
      //   params => this.getByPage(params['page'])
      // );
      
    }
  public getByPage(): void {

     let req ="token="+this.constant.local['token']+"&"+"mobile=" + this.search.phone;
     this.down = this.constant.root+"ydmgmt/api/finance/exportUserDealInfo?"+req;
     var header = new Headers();
     header.append('Content-Type', 'application/x-www-form-urlencoded');
     this.list = [];
     this.message = "查询中，请稍后...";
     this.http.get(this.constant.root+"ydmgmt/api/finance/getUserDealInfo?"+req, {headers: header})
     .map(res => res.json()).subscribe(data=> {
         this.constant.checkCode(data.code);
         if(data.code == "0"){
            this.list = data.result;
            this.message = null;

          }else{
            this.message=data.errorMsg
          }
     }),
     err => this.message="系统异常",
     () => console.log('Register Complete');
  }
  

}
