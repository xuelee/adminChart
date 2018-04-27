import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { flyIn } from '../../animations/fly-in';
import { BrowserModule } from '@angular/platform-browser';
import { Headers, Http } from '@angular/http';
import { Constant } from '../../models/constant-model';
@Component({
  selector: 'user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss'],
  animations: [
    flyIn
  ]
})

export class UserTableComponent implements OnInit {
  public constant: Constant = new Constant();
  public numPages: number = 3;
  public maxSize: number = 10;
  public itemsPerPage: number = 10;
  public totalItems: number = 0;
  public currentPage: number = 1;
  public userList: Array<JSON> = new Array;
  search = {'userName':''};
  errorMessage: string;
  constructor(public router: Router,public http:Http,
    public activeRoute: ActivatedRoute) {
  }

  ngOnInit() {

    this.activeRoute.params.subscribe(

      params => this.getUsersByPage(params['page'])
    );
  }
  public getUsersByPage(page: Number): void {
     let req = "token="+this.constant.local['token']+"&"+"userName=" + this.search.userName + "&pageSize=" + this.maxSize + "&pageNo=" + page;
     var header = new Headers();
     header.append('Content-Type', 'application/x-www-form-urlencoded');
     this.http.get(this.constant.root+"ydmgmt/api/user/queryUser?"+req, {headers: header})
     .map(res => res.json()).subscribe(data=> {
                this.constant.checkCode(data.code);
         if(data.code == "0"){
            this.userList = data.result;
            this.totalItems = data.totalSize;

          }else{
            this.errorMessage=data.errorMsg
          }
     }),
     err => this.errorMessage="系统异常",
     () => console.log('Register Complete');
  }
  public pageChanged(event): void {
    this.router.navigateByUrl('/workspace/user/usertable/page/' + event.page);
  }

  public newUser(): void {
    this.router.navigateByUrl('/workspace/user/usertable/newuser');
  }

  public blockUser(userId: Number): void {
    console.log(userId);
  }

  public unBlockUser(userId: Number): void {
    console.log(userId);
  }

  public resetPwd(userId: Number): void {
    console.log(userId);
  }
}
