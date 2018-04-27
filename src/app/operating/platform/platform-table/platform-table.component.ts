import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { flyIn } from '../../../animations/fly-in';
import { BrowserModule } from '@angular/platform-browser';
import { Headers, Http } from '@angular/http';
import { Constant } from '../../../models/constant-model';
import { Page } from '../../../models/page-model';
import { DateFormat } from '../../../animations/dateFormat';
import { DoHttp} from '../../../bootstarp/doHttp';
@Component({
  selector: 'platform-table',
  templateUrl: './platform-table.component.html',
  styleUrls: ['./platform-table.component.scss'],
  animations: [
    flyIn
  ]
})

export class PlatformTableComponent implements OnInit {
  public constant: Constant = new Constant();
  public page : Page = new Page();
  public list=[];
      search = {
      pageNo:this.page.currentPage,
      pageSize:this.page.maxSize,
      name:''
    };
  errorMessage: string;
  constructor(public router: Router,public http:Http,
    public activeRoute: ActivatedRoute) {
    this.search['name']='';
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
           pageNo:this.page.currentPage,
           pageSize:this.page.maxSize,
           mainTitle:_this.search.name
         },
         url:_this.constant.root+"ydmgmt/api/appConfiguration/getPlatformInfoListPage",
         type:"get"
       }
       doHttp.transform(this.http,opt,function(data){
         if(data){
          _this.constant.checkCode(data.code);
           if(data.code == "0"){
              _this.list = data.result;
              _this.page.totalItems = data.totalSize;
             _this.errorMessage = data.statisTime;

            }
          }else{
             alert("系统异常");
          }
       })

    }
  public pageChanged(event): void {
   this.getByPage(event.page);
  }

  public newplatform(): void {
    this.router.navigateByUrl('/workspace/operating/newplatform');
  }

  public blockplatform(platformId: Number): void {
    console.log(platformId);
  }

  public unBlockplatform(platformId: Number): void {
    console.log(platformId);
  }

  public resetPwd(platformId: Number): void {
    console.log(platformId);
  }
}
