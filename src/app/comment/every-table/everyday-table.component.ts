import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { flyIn } from '../../animations/fly-in';
import { BrowserModule } from '@angular/platform-browser';
import { Headers, Http } from '@angular/http';
import { Constant } from '../../models/constant-model';
import { DateFormat } from '../../animations/dateFormat';
import { DoHttp} from '../../bootstarp/doHttp';
@Component({
  selector: 'everyday-table',
  templateUrl: './everyday-table.component.html',
  styleUrls: ['./everyday-table.component.scss'],
  animations: [
    flyIn
  ]
})
export class EverydayTableComponent implements OnInit {
    public constant: Constant = new Constant();
    public numPages: number = 3;
    public maxSize: number = 10;
    public itemsPerPage: number = 10;
    public totalItems: number = 0;
    public currentPage: number = 1;
    public systemDate:string = '';
    public list: Array<JSON> = new Array;
    showDatePicker;
    showDatePicker1;

    search = {startTime:new Date(),endTime:new Date()};
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
     var datePipe = new DateFormat();
     let opt = {
       req:{
         token:_this.constant.local['token'],
         startTime:datePipe.transform(_this.search.startTime),
         endTime:datePipe.transform(_this.search.endTime)
       },
       url:_this.constant.root+"ydmgmt/api/statistics/getStatisByDay",
       type:"get"
     }
     doHttp.transform(this.http,opt,function(data){
       if(data){
        _this.constant.checkCode(data.code);
         if(data.code == "0"){
            _this.list = data.result;
            _this.systemDate =data.statisTime;
          }else{
            _this.errorMessage=data.errorMsg
          }
          _this.constant.checkCode(data.code);
        }else{
          _this.errorMessage="系统异常";
        }
         
     })

  }

    public pageChanged(event:any):void {
          this.router.navigateByUrl('/workspace/comment/channelavgtable/page/' + event.page);
    }
     public dataChange(show) {
      this[show] = false;
     }
    delComment(id: number){

    }
}
