import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { flyIn } from '../../animations/fly-in';
import { BrowserModule } from '@angular/platform-browser';
import { Headers, Http } from '@angular/http';
import { Constant } from '../../models/constant-model';
import { DateFormat } from '../../animations/dateFormat';
import { DoHttp} from '../../bootstarp/doHttp';
@Component({
  selector: 'channelchart-table',
  templateUrl: './channelchart-table.component.html',
  styleUrls: ['./channelchart-table.component.scss'],
  animations: [
    flyIn
  ]
})
export class ChannelchartTableComponent implements OnInit {
    public constant: Constant = new Constant();
    public numPages: number = 3;
    public maxSize: number = 10;
    public itemsPerPage: number = 10;
    public totalItems: number = 0;
    public currentPage: number = 1;
    public list: Array<JSON> = new Array;
    showDatePicker;
    showDatePicker1;
    search = {'name':'',startTime:new Date(),endTime:new Date()};
    errorMessage: string;
    constructor(public router: Router,public http:Http,
      public activeRoute: ActivatedRoute) {
    }
    ngOnInit() {

    }
     public getByPage(page: number): void {
     this.currentPage = page; 
     let _this = this;
     let doHttp = new DoHttp();
     var datePipe = new DateFormat();
     let opt = {
       req:{
           token:_this.constant.local['token'],
           channelName:_this.search.name,
           startTime:datePipe.transform(_this.search.startTime),
           endTime:datePipe.transform(_this.search.endTime),
           pageNo:page,
           pageSize:_this.maxSize
         },
         url:_this.constant.root+"ydmgmt/api/statistics/queryChannelStatis",
         type:"get"
       }
       doHttp.transform(this.http,opt,function(data){
         if(data){
          _this.constant.checkCode(data.code);
           if(data.code == "0"){
              _this.list = data.result;
              _this.errorMessage =data.statisTime;
              _this.totalItems = data.totalSize;
             
            }else{
              _this.errorMessage=data.errorMsg
            }
          }else{
            _this.errorMessage="系统异常";
          }
       })

  }
    public pageChanged(event:any):void {
      this.getByPage(event.page);
      //this.router.navigateByUrl('/workspace/comment/channelchart/page/' + event.page);
    }
     public dataChange(show) {
      this[show] = false;
     }
}
