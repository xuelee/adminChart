import { Component,Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { flyIn } from '../../animations/fly-in';
import { BrowserModule } from '@angular/platform-browser';
import { Headers, Http } from '@angular/http';
import { Constant } from '../../models/constant-model';
import { Page } from '../../models/page-model';
import { DateFormat } from '../../animations/dateFormat';
import { DoHttp} from '../../bootstarp/doHttp';
@Component({
  selector: 'monthtoptable',
  templateUrl: './monthtop-table.component.html',
  styleUrls: ['./monthtop-table.component.scss'],
  animations: [
    flyIn
  ]
})
export class MonthtopComponent implements OnInit {
    public constant: Constant = new Constant();
    public page : Page = new Page();
    public list =[];
    public datePipe = new DateFormat();
    @Input() public datepickerMode: string = "month";
    @Input() public minMode: string = "month";   
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
        this.getByPage(1);
    }
    public getByPage(page: number) {
     this.page.currentPage = page;
     let _this = this;
     let doHttp = new DoHttp();
     let opt = {
         req:{
           token:_this.constant.local['token'],
           queryTime:_this.datePipe.transform(_this.search.startTime).substring(0,7)
         },
         url:_this.constant.root+"ydmgmt/api/statistics/queryMonthlyRanking",
         type:"get"
       }
       this.down = this.constant.root+"ydmgmt/api/statistics/exportMonthlyRanking?"+this.constant.getParams(opt.req);
       doHttp.transform(this.http,opt,function(data){
         if(data){
          _this.constant.checkCode(data.code);
           if(data.code == "0"){
             _this.list=[];
             _this.list.push(data.result);
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
