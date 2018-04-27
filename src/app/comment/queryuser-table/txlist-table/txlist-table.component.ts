import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { flyIn } from '../../../animations/fly-in';
import { BrowserModule } from '@angular/platform-browser';
import { Headers, Http } from '@angular/http';
import { Constant } from '../../../models/constant-model';
import { DoHttp} from '../../../bootstarp/doHttp';
@Component({
  selector: 'txlist-table',
  templateUrl: './txlist-table.component.html',
  styleUrls: ['./txlist-table.component.scss'],
  animations: [
    flyIn
  ]
})
export class TxlistTableComponent implements OnInit {
    public constant: Constant = new Constant();
    public list: Array<JSON> = new Array;
    public numPages: number = 3;
    public maxSize: number = 10;
    public itemsPerPage: number = 10;
    public totalItems: number = 0;
    public currentPage: number = 1;
    public id:number;
    public type:string;
    public data = {};
    isPage = false;
    search = {'name':''};
    errorMessage: string;
    down:string;
    constructor(public router: Router,public http:Http,
      public activeRoute: ActivatedRoute) {
    }
    ngOnInit() {
      this.activeRoute.params.subscribe(
        params => {
          this.id=params['id'];
          this.type=params['type'];
          this.getByPage(params['page'])
        }
      );
    }
    public getByPage(page:number): void {
       let _this = this;
       let url = "";
       switch (_this.type) {
         case "tx":
           url = _this.constant.root+"ydmgmt/api/statistics/queryUserTopupRecords";
           _this.isPage = true;
           break;
          case "yhcz":
           url = _this.constant.root+"ydmgmt/api/statistics/queryUserTopupRecords";
           _this.isPage = true;
           break;  
         case "yhlx":
           url = _this.constant.root+"ydmgmt/api/statistics/queryUserInterestRecords";
           _this.down = _this.constant.root+"ydmgmt/api/statistics/exportUserInterestRecords";
           _this.isPage = true;
           break;
         case "lsxd":
           url = _this.constant.root+"ydmgmt/api/statistics/queryUserRechargeLogs";
           _this.isPage = true;
           break;
         case "yhbank":
           url = _this.constant.root+"ydmgmt/api/statistics/queryUserBanks";
           break;
          case "ydtz":
           url = _this.constant.root+"ydmgmt/api/statistics/queryUserRechargeLogs";
           break;   
         case "yhgz":
           url = _this.constant.root+"ydmgmt/api/statistics/queryUserTraceContent";
           break;
         case "yhyq":
           url = _this.constant.root+"ydmgmt/api/statistics/queryUserInvitations";
           break;       
         default:
           
           break;
       }
       let doHttp = new DoHttp();
       let opt = {
         req:{
           token:_this.constant.local['token'],
           queryUserId:_this.id,
           pageSize:_this.maxSize,
           pageNo:page
         },
         url:url,
         type:"get"
       }
       doHttp.transform(this.http,opt,function(data){
         if(data){
          _this.constant.checkCode(data.code);
           if(data.code == "0"){
              _this.list = data.result;
              _this.data = data;
              _this.totalItems = data.totalSize;
              _this.errorMessage =data.statisTime;
            }else{
              _this.errorMessage=data.errorMsg
            }
          }else{
            _this.errorMessage="系统异常";
          }
           
       })

    }
    public pageChanged(event:any):void {
      let _this = this;
          this.router.navigateByUrl('/workspace/comment/queryusertable/txlist/type/'+_this.type+'/page/' + event.page+'/id/'+_this.id);
    }
}
