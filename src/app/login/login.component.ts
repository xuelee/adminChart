import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, ActivatedRouteSnapshot, RouterState, RouterStateSnapshot } from '@angular/router';
import { User } from '../models/user-model';
import { Constant } from '../models/constant-model';
import { BrowserModule } from '@angular/platform-browser';
import { Headers, Http } from '@angular/http';
import { NgModule }      from '@angular/core';
@Component({
	selector: 'login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	public user: User = new User();
	public constant: Constant = new Constant();
	errorMessage: string;
	mode = 'Observable';
  checkurl:string = this.constant.root+"ydmgmt/api/user/getCaptcha";
	constructor(
		public router: Router,
		public activatedRoute: ActivatedRoute,
		public http:Http
	) {

	}

	ngOnInit() {
     require("activity");
   // this.getCode();
	}

	login() {
       let req = "userName=" + this.user.userName + "&password=" + this.user.password + "&validCode="+ this.user.validCode;
       var header = new Headers();
       header.append('Content-Type', 'application/x-www-form-urlencoded');
       $.loading();
       this.http.post(this.constant.root+"ydmgmt/api/user/login", req, {
            headers: header
            })
            .map(res => res.json())
            .subscribe(
             data => {
        				if(data.code == "0"){
                  localStorage.setItem('userName',data.result.userName);
                  this.constant.setLocalItem('token',data.result.token);
        					this.getMenu(data.result.token);
        					
        				}else{
                  $.loaded();
        					this.errorMessage=data.errorMsg;
                  
        				}
             },
             err => {
               $.loaded();
                this.errorMessage="系统异常";
             },
            () => console.log('Register Complete')
       );
	
	}
	getMenu(req){
     var header = new Headers();
     header.append('Content-Type', 'application/x-www-form-urlencoded');
     this.http.get(this.constant.root+"ydmgmt/api/user/queryMenuByRoleId?token="+req, {headers: header})
     .map(res => res.json()).subscribe(data=> {
       $.loaded();
     	 this.constant.checkCode(data.code);
         if(data.code == "0"){
         	let list = new Array();
            list = data.result;
            this.constant.setLocalItem('menu',JSON.stringify(list));

            this.router.navigateByUrl("workspace");
          }else{
            this.errorMessage=data.errorMsg;
            alert(this.errorMessage);
          }
     }),
     err =>  {
               $.loaded();
                this.errorMessage="系统异常";
             },
     () => console.log('Register Complete');
  }
  getCode(element){
       this.checkurl=this.constant.root+"ydmgmt/api/user/getCaptcha"+'?'+Math.random();    
  }
	forgetPwd() {
		
	}
}
