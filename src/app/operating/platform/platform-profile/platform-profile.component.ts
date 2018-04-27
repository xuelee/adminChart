import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Platform } from '../../../models/platform-model';
import { Constant } from '../../../models/constant-model';
import { BrowserModule } from '@angular/platform-browser';
import { Headers, Http } from '@angular/http';
@Component({
  selector: 'newplatform',
  templateUrl: './platform-profile.component.html',
  styleUrls: ['./platform-profile.component.scss']
})
export class PlatformProfileComponent implements OnInit {
  public platform = new Platform();
  public c = new Constant();
  public list: Array<JSON> = new Array;
  typeList=[];
  errorMessage: string;
  parent = {};
  constructor(public router: Router,public http:Http,
    public activeRoute: ActivatedRoute) {
      console.log(1);
  }
  search = this.c.params;
  ngOnInit() {
    let req = this.c.params;
    this.getTypeList(req);
    this.activeRoute.params.subscribe(
      params => {
        if(params.id != undefined && params.id != ''){
         
          req['id'] = params.id;
          this.putPlatform(req);
          
        }
      }
    );
  }

  toParams() {
    for(let key in this.platform){
       this.search[key] = this.platform[key];
    }
    return this.c.getParams(this.search);
  }
  changeType(item){
    this.platform.type=item.type;
    this.platform.typeName=item.typeName;
  }
  putPlatform(req){
    $.loading();
     var header = new Headers();
     header.append('Content-Type', 'application/x-www-form-urlencoded');
     let p = this.c.getParams(req);
     this.http.get(this.c.root+"ydmgmt/api/appConfiguration/findPlatformById?"+p, {headers: header})
     .map(res => res.json()).subscribe(data=> {
        $.loaded();
         this.c.checkCode(data.code);
         if(data.code == "0"){

                this.platform = data.result;
                this.platform['status']=data.result['status']+"";
            
          }else{
            this.errorMessage=data.errorMsg;
            alert(this.errorMessage);
          }
     }),
     err => {
       $.loaded();
       this.errorMessage="系统异常";
     },
     () => console.log('Register Complete');
  }
  addPlatform(){
     var header = new Headers();
     var params = this.toParams();
     let url = "ydmgmt/api/appConfiguration/createPlatformInfo";
     if(this.platform.id !=null){
       url = "ydmgmt/api/appConfiguration/updatePlatformInfo";
     }
     header.append('Content-Type', 'application/x-www-form-urlencoded');
      this.http.post(this.c.root+url,params, {headers: header})
     .map(res => res.json()).subscribe(data=> {
         if(data.code == "0"){
            this.router.navigateByUrl('/workspace/operating/platformtable');
            alert("成功");
          }else{
            this.errorMessage=data.errorMsg;
            alert(this.errorMessage);
          }
     }),
     err => {
              $.loaded();
              this.errorMessage="系统异常";
            },
     () => console.log('Register Complete');
  }

  getTypeList(req){
    var header = new Headers();
    header.append('Content-Type', 'application/x-www-form-urlencoded');
    let p = this.c.getParams(req);

    this.http.get(this.c.root+"ydmgmt/api/appConfiguration/getPlatformInfoType?"+p, {headers: header})
    .map(res => res.json()).subscribe(data=> {
        this.c.checkCode(data.code);
        if(data.code == "0"){
            this.typeList=data.result;
            if(this.typeList.length>0){
              this.platform.type = this.typeList[0].type;
              this.platform.typeName = this.typeList[0].typeName;
            }

         }else{
           this.errorMessage=data.errorMsg;
           alert(this.errorMessage);
         }
    }),
    err => {
      $.loaded();
      this.errorMessage="系统异常";
    },
    () => console.log('Register Complete');
  }
}