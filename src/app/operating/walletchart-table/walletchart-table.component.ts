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
  selector: 'walletcharttable',
  templateUrl: './walletchart-table.component.html',
  styleUrls: ['./walletchart-table.component.scss'],
  animations: [
    flyIn
  ]
})
export class WalletchartComponent implements OnInit {
    public constant: Constant = new Constant();
    public page : Page = new Page();
    public list=[];
    public datePipe = new DateFormat();
    search = {
      pageNo:this.page.currentPage,
      pageSize:this.page.maxSize,
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
       let userName =  this.constant.local['userName'];
       let data = {id:129,parentId:1,consKey:"AppStoreNew1",consValue:"苹果商店云端金融pro版3"};
       this.down = this.constant.root+'/workspace/operating/walletcharttable';
    }
    public getByPage(page: number) {
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
         url:_this.constant.root+"ydmgmt/api/statistics/queryWalletData",
         type:"get"
       }
       this.down = this.constant.root+"ydmgmt/api/statistics/exportWalletData?"+this.constant.getParams(opt.req);
       doHttp.transform(this.http,opt,function(data){
         if(data){
          _this.constant.checkCode(data.code);
           if(data.code == "0"){
              _this.list = data.result;
              _this.page.totalItems = data.totalSize;
             _this.totalDesc = data.totalDesc;
             _this.errorMessage = data.statisTime;

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
   public initBody(){
     for(let key in this.showDate){
       this.showDate[key] = false;
     }
   }
   public initDate($event){
     $event.stopPropagation();
     for(let key in this.showDate){
       this.showDate[key] = false;
     }
   }
}
