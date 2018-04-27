import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { flyIn } from '../../animations/fly-in';
import { BrowserModule } from '@angular/platform-browser';
import { Headers, Http } from '@angular/http';
import { Constant } from '../../models/constant-model';
import { Page } from '../../models/page-model';
import { DateFormat } from '../../animations/dateFormat';
import { DoHttp} from '../../bootstarp/doHttp';
@Component({
  selector: 'investtable',
  templateUrl: './invest-table.component.html',
  styleUrls: ['./invest-table.component.scss'],
  animations: [
    flyIn
  ]
})
export class InvestComponent implements OnInit {
    public constant: Constant = new Constant();
    public page : Page = new Page();
    public list: Array<JSON> = new Array;
    public  datePipe = new DateFormat();
    search = {
      startTime:new Date(),
      endTime:new Date()
    };
    showDate = {
      startTime:false,
      endTime:false
    }
    totalDesc:string;
    errorMessage: string;
    down:string;
    constructor(public router: Router,public http:Http,
      public activeRoute: ActivatedRoute) {
    }
    ngOnInit() {

      let req = {
           token:this.constant.local['token'],
           pageNo:this.page.currentPage,
           pageSize:this.page.maxSize,
           startTime:this.datePipe.transform(this.search.startTime),
           endTime:this.datePipe.transform(this.search.endTime)
         }
      this.down = this.constant.root+"ydmgmt/api/statistics/exportRechargeStatisYY?"+this.constant.getParams(req);
    }
    public getByPage(page: number): void {
     this.page.currentPage = page;
     let _this = this;
     let doHttp = new DoHttp();
     let opt = {
         req:{
           token:_this.constant.local['token'],
           pageNo:this.page.currentPage,
           pageSize:this.page.maxSize,
           startTime:_this.datePipe.transform(_this.search.startTime),
           endTime:_this.datePipe.transform(_this.search.endTime)
         },
         url:_this.constant.root+"ydmgmt/api/statistics/queryRechargeStatisYY",
         type:"get"
       }
       this.down = this.constant.root+"ydmgmt/api/statistics/exportRechargeStatisYY?"+this.constant.getParams(opt.req);
       doHttp.transform(this.http,opt,function(data){
         if(data){
          _this.constant.checkCode(data.code);
           if(data.code == "0"){
              _this.list = data.result;
              _this.page.totalItems = data.totalSize;
            }else{
             alert(data.errorMsg);
            }
          }else{
             alert("系统异常");
          }
       })

    }
    public pageChanged(event:any):void {
      this.getByPage(event.page);
    }
    public dataChange(show) {
     var _this =this;
     setTimeout(function(){
        _this.showDate[show] = false;
      },100);
   }
   public initDate($event){
     $event.stopPropagation();
     for(let key in this.showDate){
       this.showDate[key] = false;
     }
   }
}
