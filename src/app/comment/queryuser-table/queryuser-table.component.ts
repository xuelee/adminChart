import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { flyIn } from '../../animations/fly-in';
import { BrowserModule } from '@angular/platform-browser';
import { Headers, Http } from '@angular/http';
import { Constant } from '../../models/constant-model';
import { DateFormat } from '../../animations/dateFormat';
import { DoHttp} from '../../bootstarp/doHttp';
@Component({
  selector: 'queryuser-table',
  templateUrl: './queryuser-table.component.html',
  styleUrls: ['./queryuser-table.component.scss'],
  animations: [
    flyIn
  ]
})
export class QueryuserTableComponent implements OnInit {
    public constant: Constant = new Constant();
    public list: Array<JSON> = new Array;
    search = {'userName':''};
    errorMessage: string;
    constructor(public router: Router,public http:Http,
      public activeRoute: ActivatedRoute) {
    }
    ngOnInit() {
      
    }
  public getByPage(): void {
     let _this = this;
     let doHttp = new DoHttp();
     var datePipe = new DateFormat();
     let opt = {
       req:{
         token:_this.constant.local['token'],
         userName:_this.search.userName
       },
       url:_this.constant.root+"ydmgmt/api/statistics/queryUserInfo",
       type:"get"
     }
     
     doHttp.transform(this.http,opt,function(data){
       if(data){
        _this.errorMessage=data.errorMsg
        _this.constant.checkCode(data.code);
         if(data.code == "0"){
            _this.list = data.result;
            _this.errorMessage =data.statisTime;
          }else{
            _this.errorMessage=data.errorMsg
          }
          
        }else{
          _this.errorMessage="系统异常";
        }
         
     })

  }
  open(url){
    let _this = this;

    window.open(_this.constant.root+"/modelpop/"+url, 'historyOrder', 'height=600,width=1200,top=0,left=0,toolbar=no,menubar=no,scrollbars=no, resizable=no,location=no, status=no');
  }
    delComment(id: number){

    }
}
