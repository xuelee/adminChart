import { Component, OnInit } from '@angular/core';
import { FooterInfoComponent } from '../footer-info/footer-info.component';
import { LeftNavComponent } from '../left-nav/left-nav.component';
import { TopMenuComponent } from '../top-menu/top-menu.component';
import { UserTableComponent } from '../user/user-table/user-table.component';
import { ActivatedRoute, Router, ActivatedRouteSnapshot, RouterState, RouterStateSnapshot } from '@angular/router';
import { Constant } from '../models/constant-model';
@Component({
  selector: 'workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss']
})
export class WorkspaceComponent implements OnInit {
	public constant: Constant = new Constant();
  	constructor(		public router: Router,) { 

  	}

  	ngOnInit() {
  		//用require动态加载的外部JS
		  require("custom");
		  if(this.constant.local['token'] == null||this.constant.local['token'] == ""){
				this.router.navigateByUrl("login");
		}
  	}
}
