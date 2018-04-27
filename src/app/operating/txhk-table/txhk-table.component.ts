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
  selector: 'txhktable',
  templateUrl: './txhk-table.component.html',
  styleUrls: ['./txhk-table.component.scss'],
  animations: [
    flyIn
  ]
})
export class TxhkComponent implements OnInit {
    public constant: Constant = new Constant();
    public page : Page = new Page();
    public list: Array<JSON> = new Array;
    public  datePipe = new DateFormat();
    type={name:'提现',value:0};
    search = {
      token:'',
      mobile:'',
      type:0,
      pageNo:this.page.currentPage,
      pageSize:this.page.maxSize,
      startTime:new Date(),
      endTime:new Date()
    };
    showDatePicker;
    showDatePicker1;
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
           mobile:this.search.mobile,
           type:this.search.type,
           startTime:this.datePipe.transform(this.search.startTime),
           endTime:this.datePipe.transform(this.search.endTime)
         }
      this.down = this.constant.root+"ydmgmt/api/statistics/exportWalletOutStatisYY?"+this.constant.getParams(req);
    }
    public getByPage(page: number): void {
     this.page.currentPage = page;
     this.search.type=this.type.value;
     let _this = this;
     let doHttp = new DoHttp();
     var datePipe = new DateFormat();
     let opt = {
         req:{
           token:_this.constant.local['token'],
           pageNo:page,
           pageSize:this.page.maxSize,
           mobile:this.search.mobile,
           type:this.search.type,
           startTime:datePipe.transform(_this.search.startTime),
           endTime:datePipe.transform(_this.search.endTime)
         },
         url:_this.constant.root+"ydmgmt/api/statistics/queryWalletOutStatisYY",
         type:"get"
       }
       this.down = this.constant.root+"ydmgmt/api/statistics/exportWalletOutStatisYY?"+this.constant.getParams(opt.req);
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
}
