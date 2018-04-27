import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { flyIn } from '../../animations/fly-in';
import { BrowserModule } from '@angular/platform-browser';
import { Headers, Http } from '@angular/http';
import { Constant } from '../../models/constant-model';
import { DateFormat } from '../../animations/dateFormat';
@Component({
  selector: 'ordertable',
  templateUrl: './order-table.component.html',
  styleUrls: ['./order-table.component.scss'],
  animations: [
    flyIn
  ]
})
export class OrderComponent implements OnInit {
    public constant: Constant = new Constant();
    public numPages: number = 3;
    public maxSize: number = 10;
    public itemsPerPage: number = 10;
    public totalItems: number = 0;
    public currentPage: number = 1;
    public list: Array<JSON> = new Array;
    search = {'name':''};
    message: string;
    constructor(public router: Router,public http:Http,
      public activeRoute: ActivatedRoute) {
    }
    ngOnInit() {
      // this.activeRoute.params.subscribe(
      //   params => this.getByPage(params['page'])
      // );
    }
  public getByPage(page: Number): void {

     let req =  "token="+this.constant.local['token']+"&"+"rechargeNo=" + this.search.name + "&pageSize=" + this.maxSize + "&pageNo=" + page;
     var header = new Headers();
     header.append('Content-Type', 'application/x-www-form-urlencoded');
     this.list = [];
     this.message = "查询中，请稍后...";
     this.http.get(this.constant.root+"ydmgmt/api/finance/getOrderInfo?"+req, {headers: header})
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
          this.router.navigateByUrl('/workspace/financial/ordertable/page/' + event.page);
    }
    delFinancial(id: number){

    }
}
