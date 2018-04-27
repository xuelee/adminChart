import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { flyIn } from '../../animations/fly-in';
import { BrowserModule } from '@angular/platform-browser';
import { Headers, Http } from '@angular/http';
import { Constant } from '../../models/constant-model';
@Component({
  selector: 'menu-table',
  templateUrl: './menu-table.component.html',
  styleUrls: ['./menu-table.component.scss'],
  animations: [
    flyIn
  ]
})

export class MenuTableComponent implements OnInit {
  public constant: Constant = new Constant();
  public numPages: number = 3;
  public maxSize: number = 10;
  public itemsPerPage: number = 10;
  public totalItems: number = 0;
  public currentPage: number = 1;
  public menuList: Array<JSON> = new Array;
  search = this.constant.params;

  errorMessage: string;
  constructor(public router: Router,public http:Http,
    public activeRoute: ActivatedRoute) {
    this.search['name']='';
  }

  ngOnInit() {
    this.activeRoute.params.subscribe(
      params => this.getMenusByPage(params['page'])
    );
  }
  public getMenusByPage(page: Number): void {
    try{
     let req = this.constant.getParams(this.search)+"&pageSize=" + this.maxSize + "&pageNo=" + page ;
     var header = new Headers();
     header.append('Content-Type', 'application/x-www-form-urlencoded');
     this.menuList = null;
     this.http.get(this.constant.root+"ydmgmt/api/user/queryMenu?"+req, {headers: header})
     .map(res => res.json()).subscribe(data=> {
                this.constant.checkCode(data.code);
         if(data.code == "0"){
            this.menuList = data.result;
            this.totalItems = data.totalSize;

          }else{
            this.errorMessage=data.errorMsg;
          }
     }),
     err => this.errorMessage="系统异常",
     () => console.log('Register Complete');
   }catch(e){
     console.log(111);
   }
  }
  public pageChanged(event): void {
    this.router.navigateByUrl('/workspace/menu/menutable/page/' + event.page);
  }

  public newmenu(): void {
    this.router.navigateByUrl('/workspace/menu/menutable/newmenu');
  }

  public blockmenu(menuId: Number): void {
    console.log(menuId);
  }

  public unBlockmenu(menuId: Number): void {
    console.log(menuId);
  }

  public resetPwd(menuId: Number): void {
    console.log(menuId);
  }
}
