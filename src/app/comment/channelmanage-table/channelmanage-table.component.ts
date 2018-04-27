import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { flyIn } from '../../animations/fly-in';
import { BrowserModule } from '@angular/platform-browser';
import { Headers, Http } from '@angular/http';
import { Constant } from '../../models/constant-model';
import { DateFormat } from '../../animations/dateFormat';
import { DoHttp} from '../../bootstarp/doHttp';
@Component({
  selector: 'channelmanage-table',
  templateUrl: './channelmanage-table.component.html',
  styleUrls: ['./channelmanage-table.component.scss'],
  animations: [
    flyIn
  ]
})
export class ChannelmanagetableComponent implements OnInit {
    public constant: Constant = new Constant();
    public numPages: number = 3;
    public maxSize: number = 10;
    public itemsPerPage: number = 10;
    public totalItems: number = 0;
    public currentPage: number = 1;
    public systemDate:string = '';
    public list: Array<JSON> = new Array;
    search = {channelId:""};
    roles = this.constant.getLocalToJSON("rolelist");
    errorMessage: string;
    constructor(public router: Router,public http:Http,
      public activeRoute: ActivatedRoute) {

    }
    ngOnInit() {
      this.activeRoute.params.subscribe(
        params => {
            this.currentPage = params['page']*1;
            this.getByPage(params['page'])
        }
      );
    }
    public getByPage(page: Number): void {
       let _this = this;
       let doHttp = new DoHttp();
       _this.search['token']=_this.constant.params['token'];
       _this.search['pageNo']=_this.currentPage;
       _this.search['pageSize']=_this.maxSize;
       let opt = {
         req:_this.search,
         url:_this.constant.root+"ydmgmt/api/statistics/queryChannels",
         type:"get"
       }
       doHttp.transform(this.http,opt,function(data){
         if(data){
          _this.constant.checkCode(data.code);
           if(data.code == "0"){
              _this.list = data.result;
              _this.totalItems = data.totalSize;
            }else{
              _this.errorMessage=data.errorMsg
            }
          }else{
            _this.errorMessage="系统异常";
          }
         if(_this.errorMessage !=null && _this.errorMessage.length>0){
           alert(_this.errorMessage);
         }
       })

    } 
    public pageChanged(event:any):void {
          this.router.navigateByUrl('/workspace/comment/channelmanagetable/page/' + event.page);
    }
     delChannel(id){
     var _this = this;
     let doHttp = new DoHttp();
     _this.search["id"]=id;
     let opt = {
       req:_this.search,
       url:_this.constant.root+"ydmgmt/api/statistics/deleteChannelById",
       type:"post"
     }
     doHttp.transform(this.http,opt,function(data){
       if(data){
        _this.constant.checkCode(data.code);
         if(data.code == "0"){
             alert("删除成功");
            _this.getByPage(_this.currentPage);
           
          }else{
            _this.errorMessage=data.errorMsg;
          }

        }else{
          _this.errorMessage="系统异常";
        }
       if(_this.errorMessage !=null && _this.errorMessage.length>0){
         alert(_this.errorMessage);
       }
     })
  }
}
