import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Menu } from '../../models/menu-model';
import { Constant } from '../../models/constant-model';
import { BrowserModule } from '@angular/platform-browser';
import { Headers, Http } from '@angular/http';
@Component({
  selector: 'app-role-profile',
  templateUrl: './role-profile.component.html',
  styleUrls: ['./role-profile.component.scss']
})
export class RoleProfileComponent implements OnInit {
  public c = new Constant();
  public list:Array<JSON>= new Array();
  errorMessage: string;
  parent = {};
  roles = {};
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
          this.search['allotRoleid']=params.id;
          req['queryRoleId'] = params.id;
          this.putMenu(req);
        }
      }
    );
  }

  toParams() {
    return this.c.getParams(this.search);
  }
  getMenu(){
     this.list = JSON.parse(this.c.local['menu']);

  }
  getRoles(list){
      for(let i=0;i<list.length;i++){
        this.roles[list[i].id]=true;
        if(list[i].childMenu != null && list[i].childMenu.length>0){
          this.getRoles(list[i].childMenu);
        }
      }  
  }
  checkRoles(item){
     if(this.roles[item.id]){
       this.roles[item.parentid]=true;
     }
     if(item.childMenu && item.childMenu.length>0){
       for(let i=0;i<item.childMenu.length;i++){

        this.roles[item.childMenu[i].id]=this.roles[item.id];
       }
     }
  }
  checkRolesAll(item){
    for(let i=0;i<item.childMenu.length;i++){

    }
 }
  putMenu(req){
     var header = new Headers();
     header.append('Content-Type', 'application/x-www-form-urlencoded');
     let p = this.c.getParams(req);
     this.http.get(this.c.root+"ydmgmt/api/user/queryMenuByRoleId?"+p, {headers: header})
     .map(res => res.json()).subscribe(data=> {
        this.c.checkCode(data.code);
         if(data.code == "0"){
           this.getRoles(data.result);
          }else{
            this.errorMessage=data.errorMsg;
            alert(this.errorMessage);
          }
     }),
     err => this.errorMessage="系统异常",
     () => console.log('Register Complete');
  }
  bindMenu(){
     var header = new Headers();
     let allotMenuids ="" ;
      for(let key in this.roles){
        if(this.roles[key]){
          allotMenuids+=key+",";
        }
      }
     this.search['allotMenuids'] = allotMenuids;
     var params = this.toParams();
     let url = "ydmgmt/api/user/allotMenu";
     header.append('Content-Type', 'application/x-www-form-urlencoded');
      this.http.post(this.c.root+url,params, {headers: header})
     .map(res => res.json()).subscribe(data=> {
         if(data.code == "0"){
            this.router.navigateByUrl('/workspace/role/roletable/page/' + 1);
            alert("成功");
          }else{
            this.errorMessage=data.errorMsg;
            alert(this.errorMessage);
          }
     }),
     err => this.errorMessage="系统异常",
     () => console.log('Register Complete');
  }
}