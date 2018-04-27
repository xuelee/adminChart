import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { flyIn } from '../../animations/fly-in';
import { BrowserModule } from '@angular/platform-browser';
import { Headers, Http } from '@angular/http';
import { Constant } from '../../models/constant-model';
import { DateFormat } from '../../animations/dateFormat';
import { DoHttp} from '../../bootstarp/doHttp';
@Component({
  selector: 'walletout-table',
  templateUrl: './walletout-table.component.html',
  styleUrls: ['./walletout-table.component.scss'],
  animations: [
    flyIn
  ]
})
export class WalletoutTableComponent implements OnInit {
    public constant: Constant = new Constant();
    public numPages: number = 3;
    public maxSize: number = 10;
    public itemsPerPage: number = 10;
    public totalItems: number = 0;
    public currentPage: number =1;
    public list: Array<JSON> = new Array;
    showDatePicker;
    showDatePicker1;
    showDatePicker2;
    showDatePicker3;
    down={exportExcel:'',exportUserId:'',exportPhone:''};
    search = {
      status:false,
      type:{tx:true,hk:true},
      encashStartTime:new Date(),
      encashEndTime:new Date(),
      refundStartTime:new Date(),
      refundEndTime:new Date()
    };
    errorMessage: string;
    totalDesc:string;
    constructor(public router: Router,public http:Http,
      public activeRoute: ActivatedRoute) {

    }
    ngOnInit() {  
       this.activeRoute.params.subscribe(
        params => {
            this.currentPage = params['page'];
            this.getByPage(params['page'])
        }
      );
    }
  public getByPage(page: Number):void{
     let _this = this;
     let doHttp = new DoHttp();
     var datePipe = new DateFormat();
    if(!_this.search.type.tx && !_this.search.type.hk){
       alert("请选择提现还是回款数据");
       
     }else{
       let opt = {
         req:{
           token:_this.constant.local['token'],
           status:_this.search.status?1:0,
           encashStartTime:_this.search.type.tx?datePipe.transform(_this.search.encashStartTime):"",
           encashEndTime:_this.search.type.tx?datePipe.transform(_this.search.encashEndTime):"",
           refundStartTime:_this.search.type.hk?datePipe.transform(_this.search.refundStartTime):"",
           refundEndTime:_this.search.type.hk?datePipe.transform(_this.search. refundEndTime):"",
           pageNo:page,
           pageSize:_this.maxSize
         },
         url:_this.constant.root+"ydmgmt/api/statistics/queryWalletOutStatis",
         type:"get"
       }
       
       _this.down.exportExcel = this.constant.root+"ydmgmt/api/statistics/exportWalletOutStatis?"+_this.constant.getParams(opt.req);
       _this.down.exportUserId = this.constant.root+"ydmgmt/api/statistics/exportWalletOutStatisUserId?"+_this.constant.getParams(opt.req);
       _this.down.exportPhone = this.constant.root+"ydmgmt/api/statistics/exportWalletOutStatisPhoneNO?"+_this.constant.getParams(opt.req);
       doHttp.transform(this.http,opt,function(data){
         if(data){
          _this.constant.checkCode(data.code);
           if(data.code == "0"){
              _this.list = data.result;
              _this.totalItems = data.totalSize;
              _this.totalDesc = data.totalDesc;
            }else{
              _this.errorMessage=data.errorMsg
            }
            _this.constant.checkCode(data.code);
          }else{
            _this.errorMessage="系统异常";
          }
          if(_this.errorMessage !=null){
            alert(_this.errorMessage);
          } 
       })
    }
  }

    public pageChanged(event:any):void {
          this.router.navigateByUrl('/workspace/comment/walletouttable/page/' + event.page);
    }
     public dataChange(show) {
      this[show] = false;
     }
}
