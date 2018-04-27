import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Menu } from '../../models/menu-model';
import { Constant } from '../../models/constant-model';
import { BrowserModule } from '@angular/platform-browser';
import { Headers, Http } from '@angular/http';
@Component({
  selector: 'app-menu-profile',
  templateUrl: './menu-profile.component.html',
  styleUrls: ['./menu-profile.component.scss']
})
export class MenuProfileComponent implements OnInit {
  public menu = new Menu();
  public c = new Constant();
  public list: Array<JSON> = new Array;
  errorMessage: string;
  parent = {};
  constructor(public router: Router,public http:Http,
    public activeRoute: ActivatedRoute) {

  }
  search = this.c.params;
  ngOnInit() {
    this.getMenu();
    this.activeRoute.params.subscribe(
      params => {
        if(params.id != undefined && params.id != ''){
          let req = this.c.params;
          req['id'] = params.id;
          this.putMenu(req);
        }
      }
    );
  }

  toParams() {
    for(let key in this.menu){
       this.search[key] = this.menu[key];
    }
    return this.c.getParams(this.search);
  }
  getMenu(){
     var _this = this;
     _this.list =  JSON.parse(_this.c.local['menu']);
     if(_this.list.length>0){
         _this.parent = JSON.parse(_this.c.local['menu'])[0];
       }
  }
  putMenu(req){
     var header = new Headers();
     header.append('Content-Type', 'application/x-www-form-urlencoded');
     let p = this.c.getParams(req);
     this.http.get(this.c.root+"ydmgmt/api/user/queryMenu?"+p, {headers: header})
     .map(res => res.json()).subscribe(data=> {
        this.c.checkCode(data.code);
         if(data.code == "0"){
           if(data.result.length == 1){
                this.menu = data.result[0];
                this.parent['id'] = data.result[0].parentid;
                this.parent['name'] =data.result[0].parentname;
            }
            
          }else{
            this.errorMessage=data.errorMsg;
            alert(this.errorMessage);
          }
     }),
     err => this.errorMessage="系统异常",
     () => console.log('Register Complete');
  }
  addMenu(){
     var header = new Headers();
     var params = this.toParams();
     let url = "ydmgmt/api/user/addMenu";
     if(this.menu.id !=null){
       url = "ydmgmt/api/user/updateMenu";
     }
     header.append('Content-Type', 'application/x-www-form-urlencoded');
      this.http.post(this.c.root+url,params, {headers: header})
     .map(res => res.json()).subscribe(data=> {
         if(data.code == "0"){
            this.router.navigateByUrl('/workspace/menu/menutable/page/' + 1);
            alert("成功");
          }else{
            this.errorMessage=data.errorMsg;
            alert(this.errorMessage);
          }
     }),
     err => this.errorMessage="系统异常",
     () => console.log('Register Complete');
  }
  changeParent(item){
    this.parent['id'] = item.id;
    this.parent['name'] = item.name;
    this.menu.parentid = item.id;
  }
}