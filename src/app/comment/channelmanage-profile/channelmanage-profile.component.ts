import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Channel } from '../../models/channel-model';
import { Constant } from '../../models/constant-model';
import { BrowserModule } from '@angular/platform-browser';
import { Headers, Http } from '@angular/http';
import { DoHttp} from '../../bootstarp/doHttp';
@Component({
  selector: 'app-channelmanage-profile',
  templateUrl: './channelmanage-profile.component.html',
  styleUrls: ['./channelmanage-profile.component.scss']
})
export class ChannelmanageProfileComponent implements OnInit {
  public channel = new Channel();
  public c = new Constant();
  public list: Array<JSON> = new Array;
  errorMessage: string;
  constructor(public router: Router,public http:Http,
    public activeRoute: ActivatedRoute) {

  }
  ngOnInit() {
    this.activeRoute.params.subscribe(
      params => {
        if(params.id != undefined && params.id != ''){
          let req = this.c.params;
          req['channelId'] = params.id;
          this.putMenu(req);
        }
      }
    );
  }

  putMenu(req){
     var _this = this;
     let doHttp = new DoHttp();
     let opt = {
       req:req,
       url:_this.c.root+"ydmgmt/api/statistics/queryChannels",
       type:"get"
     }
     doHttp.transform(this.http,opt,function(data){
       if(data){
        _this.c.checkCode(data.code);
         if(data.code == "0"){
           if(data.result && data.result.length == 1){
             for(let key in data.result[0]){
               _this.channel[key]=data.result[0][key];
             }
           }else{
             _this.errorMessage="系统异常";
           }

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
  addChannel(){
     var _this = this;
     let doHttp = new DoHttp();
     let opt = {
       req:_this.channel,
       url:_this.c.root+"ydmgmt/api/statistics/addChannel",
       type:"post"
     }
     if(_this.channel.id != null){
       opt.url = _this.c.root+"ydmgmt/api/statistics/updateChannel";
     }
     doHttp.transform(this.http,opt,function(data){
       if(data){
        _this.c.checkCode(data.code);
         if(data.code == "0"){
            _this.router.navigateByUrl('/workspace/comment/channelmanagetable/page/' + 1);
            alert("成功");
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