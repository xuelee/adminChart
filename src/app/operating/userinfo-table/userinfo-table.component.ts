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
  selector: 'userinformationtable',
  templateUrl: './userinfo-table.component.html',
  styleUrls: ['./userinfo-table.component.scss'],
  animations: [
    flyIn
  ]
})
export class UserInfoComponent implements OnInit {
    public constant: Constant = new Constant();
    public page : Page = new Page();
    public list: Array<JSON> = new Array;
    public  datePipe = new DateFormat();

    search = {
      token:'',
      phone:'',
      type:{name:'全部',value:1},
      investStartTime:new Date(),
      investEndTime:new Date(),
      regStartTime:new Date(),
      regEndTime:new Date(),
    };
    showDatePicker;
    showDatePicker1;
    showDatePicker2;
    showDatePicker3;
    errorMessage: string;
    down:string;
    constructor(public router: Router,public http:Http,
      public activeRoute: ActivatedRoute) {
    }
    ngOnInit() {
       this.clear();
       let req = {
         token:this.constant.local['token'],
         pageNo:this.page.currentPage,
         pageSize:this.page.maxSize,
         investType:this.search.type.value,
         userName:this.search.phone,
         investStartTime:this.datePipe.transform(this.search.investStartTime),
         investEndTime:this.datePipe.transform(this.search.investEndTime),
         regStartTime:this.datePipe.transform(this.search.regStartTime),
         regEndTime:this.datePipe.transform(this.search.regEndTime)
       }
      this.down = this.constant.root+"ydmgmt/api/statistics/exportGetUserInfo?"+this.constant.getParams(req);
    }
    public getByPage(page: number): void {
     this.page.currentPage = page;
     let _this = this;
     let doHttp = new DoHttp();
     let opt = {
        req:{
           token:this.constant.local['token'],
           pageNo:this.page.currentPage,
           pageSize:this.page.maxSize,
           investType:this.search.type.value,
           userName:this.search.phone,
           investStartTime:this.datePipe.transform(this.search.investStartTime),
           investEndTime:this.datePipe.transform(this.search.investEndTime),
           regStartTime:this.datePipe.transform(this.search.regStartTime),
           regEndTime:this.datePipe.transform(this.search.regEndTime)
           },
       url:_this.constant.root+"ydmgmt/api/statistics/getUserInfo",
       type:"get"}
       this.down = this.constant.root+"ydmgmt/api/statistics/exportGetUserInfo?"+this.constant.getParams(opt.req);
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
     window.setTimeout(function(){
         _this[show] = false;
       },300);
    
   }
    public clear(): void {
      this.search.regStartTime = void 0;
      this.search.regEndTime = void 0;
      this.search.investStartTime = void 0;
      this.search.investEndTime = void 0;
    }
}
