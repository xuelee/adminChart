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
  selector: 'salestable',
  templateUrl: './sales-table.component.html',
  styleUrls: ['./sales-table.component.scss'],
  animations: [
    flyIn
  ]
})
export class SalesComponent implements OnInit {
    public constant: Constant = new Constant();
    public page : Page = new Page();
    public list: Array<JSON> = new Array;
    public  datePipe = new DateFormat();
    search = {
      type:{name:'全部',value:1},
      tradeStartTime:new Date(),
      tradeEndTime:new Date(),
      regStartTime:new Date(),
      regEndTime:new Date()
    };
    showDatePicker;
    showDatePicker1;
    showDatePicker2;
    showDatePicker3;
    totalDesc:string;
    errorMessage: string;
    down:string;
    constructor(public router: Router,public http:Http,
      public activeRoute: ActivatedRoute) {
    }
    ngOnInit() {
      this.search.regStartTime = void 0;
      this.search.regEndTime = void 0;
      let req = {
           token:this.constant.local['token'],
           pageNo:this.page.currentPage,
           pageSize:this.page.maxSize,

           tradeStartTime:this.datePipe.transform(this.search.tradeStartTime),
           tradeEndTime:this.datePipe.transform(this.search.tradeEndTime),
           regStartTime:this.datePipe.transform(this.search.regStartTime),
           regEndTime:this.datePipe.transform(this.search.regEndTime)
         }
      this.down = this.constant.root+"ydmgmt/api/statistics/exportQuerySaleRecord?"+this.constant.getParams(req);
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
           tradeType:this.search.type.value,
           tradeStartTime:this.datePipe.transform(this.search.tradeStartTime),
           tradeEndTime:this.datePipe.transform(this.search.tradeEndTime),
           regStartTime:this.datePipe.transform(this.search.regStartTime),
           regEndTime:this.datePipe.transform(this.search.regEndTime)
         },
         url:_this.constant.root+"ydmgmt/api/statistics/querySaleRecord",
         type:"get"
       }
       this.down = this.constant.root+"ydmgmt/api/statistics/exportQuerySaleRecord?"+this.constant.getParams(opt.req);
       doHttp.transform(this.http,opt,function(data){
         if(data){
          _this.constant.checkCode(data.code);
           if(data.code == "0"){
              _this.list = data.result;
              _this.page.totalItems = data.totalSize;
             _this.totalDesc = data.totalDesc;
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
     _this[show] = false;
    
   }
     public clear(): void {
      this.search.regStartTime = void 0;
      this.search.regEndTime = void 0;
      //this.dateDisabled = undefined;
    }
    getfocus(event:any){
      console.log(event)
      event.srcElement.focus();
    }
}
