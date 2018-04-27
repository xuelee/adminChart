import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { flyIn } from '../../animations/fly-in';
import { BrowserModule } from '@angular/platform-browser';
import { Headers, Http } from '@angular/http';
import { Constant } from '../../models/constant-model';
import { DateFormat } from '../../animations/dateFormat';
@Component({
  selector: 'userwallettable',
  templateUrl: './userwallet-table.component.html',
  styleUrls: ['./userwallet-table.component.scss'],
  animations: [
    flyIn
  ]
})
export class UserwalletComponent implements OnInit {
    public constant: Constant = new Constant();
    public numPages: number = 3;
    public maxSize: number = 10;
    public itemsPerPage: number = 10;
    public totalItems: number = 0;
    public currentPage: number = 1;
    public list: Array<JSON> = new Array;
    showDatePicker;
    showDatePicker1;
    search = {'phone':'', startTime:new Date(),endTime:new Date(),};
    message: string;
    down:string;
    constructor(public router: Router,public http:Http,
      public activeRoute: ActivatedRoute) {
    }
    ngOnInit() {
     var datePipe = new DateFormat();
     let s = datePipe.transform(this.search.startTime);
     let e = datePipe.transform(this.search.endTime);
     let req =  "token="+this.constant.local['token']+"&"+"mobile=" + this.search.phone +  "&pageSize=" + this.maxSize + "&pageNo=" + this.currentPage+ "&startTime=" + s + "&endTime=" + e;
     this.down = this.constant.root+"ydmgmt/api/finance/exportUserWalletInterestStatis?"+req;
    }
  public getByPage(page: Number): void {
     var datePipe = new DateFormat();
     let s = datePipe.transform(this.search.startTime);
     let e = datePipe.transform(this.search.endTime);
     let req =  "token="+this.constant.local['token']+"&"+"mobile=" + this.search.phone +  "&pageSize=" + this.maxSize + "&pageNo=" + page+ "&startTime=" + s + "&endTime=" + e;
     this.down = this.constant.root+"ydmgmt/api/finance/exportUserWalletInterestStatis?"+req;
     var header = new Headers();
     header.append('Content-Type', 'application/x-www-form-urlencoded');
     this.list = [];
     this.message = "查询中，请稍后...";
     this.http.get(this.constant.root+"ydmgmt/api/finance/getUserWalletInterestStatis?"+req, {headers: header})
     .map(res => res.json()).subscribe(data=> {
         this.constant.checkCode(data.code);
         if(data.code == "0"){
            this.list = data.result;
            this.totalItems = data.totalSize;
            this.message = null;

          }else{
            this.message=data.errorMsg
          }
     }),
     err => this.message="系统异常",
     () => console.log('Register Complete');
  }
    public pageChanged(event:any):void {
          this.message="加载下一页数据...";
          this.getByPage(event.page);
          this.router.navigateByUrl('/workspace/financial/userwallettable/page/' + event.page);
    }
    public dataChange(show) {
      this[show] = false;
     }
    delFinancial(id: number){

    }
}
