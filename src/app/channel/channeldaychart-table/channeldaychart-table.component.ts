import { Component, OnInit , DoCheck,SimpleChanges,OnChanges,Input} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { flyIn } from '../../animations/fly-in';
import { BrowserModule } from '@angular/platform-browser';
import { Headers, Http } from '@angular/http';
import { Constant } from '../../models/constant-model';
import { Page } from '../../models/page-model';
import { DateFormat } from '../../animations/dateFormat';
import { DoHttp} from '../../bootstarp/doHttp';

@Component({
  selector: 'channeldaycharttable',
  templateUrl: './channeldaychart-table.component.html',
  styleUrls: ['./channeldaychart-table.component.scss'],
  animations: [
    flyIn
  ]
})
export class ChannelDayChartComponent{
    public constant: Constant = new Constant();
    public page : Page = new Page();
    public list=[];
    public channelList=[];
    public datePipe = new DateFormat();
    token="";
    channel = {};
    search = {
      pageNo:this.page.currentPage,
      pageSize:this.page.maxSize,
      projectType:"",
      consValue:'',
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
       this.getChannel();
       let userName =  this.constant.local['userName'];
             this.token = this.constant.local['token'];
      this.down = this.constant.root+'/workspace/channel/channeldaycharttable';
    }
    public getByPage(page: number) {
     this.page.currentPage = page;
     let _this = this;
     let doHttp = new DoHttp();
     if(this.channel['id'] == null){
       alert("请选择渠道");
       return false;
     }
     let opt = {
         req:{
           token:_this.constant.local['token'],
           pageNo:this.page.currentPage,
           pageSize:this.page.maxSize,
           channelId:this.channel['id'],
           startTime:_this.datePipe.transform(_this.search.startTime),
           endTime:_this.datePipe.transform(_this.search.endTime)
         },
         url:_this.constant.root+"ydmgmt/api/statistics/singleChannelStatis",
         type:"get"
       }
       this.down = this.constant.root+"ydmgmt/api/statistics/exportSingleChannelStatis?"+this.constant.getParams(opt.req);
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
    public getChannel(){
        let _this = this;
        let doHttp = new DoHttp();
        let opt = {
            req:{
              token:_this.constant.local['token']
            },
            url:_this.constant.root+"ydmgmt/api/statistics/queryChannelListAuth",
            type:"get"
          }
          doHttp.transform(this.http,opt,function(data){
            if(data){
              _this.constant.checkCode(data.code);
              if(data.code == "0"){
                 _this.channelList = data.result;
                 _this.setSelect();
                }
              }else{
                alert("系统异常");
              }
          })
    }
    public setSelect(){
      let _this = this;
      for(let i = 0;i<_this.channelList.length;i++){
        if(_this.channelList[i]['consValue'].indexOf(_this.search['consValue']) >= 0){
          _this.channelList[i]['hidden']=false;
        }else{
          _this.channelList[i]['hidden']=true;
        }
      }
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
