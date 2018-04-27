import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { flyIn } from '../../animations/fly-in';
import { BrowserModule } from '@angular/platform-browser';
import { Headers, Http } from '@angular/http';
import { Constant } from '../../models/constant-model';
import { DateFormat } from '../../animations/dateFormat';
import { DoHttp} from '../../bootstarp/doHttp';
@Component({
  selector: 'operating-table',
  templateUrl: './operating-table.component.html',
  styleUrls: ['./operating-table.component.scss'],
  animations: [
    flyIn
  ]
})
export class OperatingTableComponent implements OnInit {
    public constant: Constant = new Constant();
    public list={depositIncrease: "", repeatRechargeUserNumBesidesNewPreferential: "", onceAndRepeatUserCount: "", thirtyRemaining: ""}
    showDatePicker;
    showDatePicker1;
    search = {'name':'',startTime:new Date(),endTime:new Date()};
    errorMessage: string;
    constructor(public router: Router,public http:Http,
      public activeRoute: ActivatedRoute) {
    }
    ngOnInit() {
      this.activeRoute.params.subscribe(
        params => this.getByPage()
      );
    }
  public getByPage(): void {
     let _this = this;
     let doHttp = new DoHttp();
     var datePipe = new DateFormat();
     let opt = {
       req:{
         token:_this.constant.local['token'],
         startTime:datePipe.transform(_this.search.startTime),
         endTime:datePipe.transform(_this.search.endTime)
       },
       url:_this.constant.root+"ydmgmt/api/statistics/queryOperativeStatis",
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

     public dataChange(show) {
      this[show] = false;
     }

}
