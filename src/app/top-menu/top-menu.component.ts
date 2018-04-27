import { Component, HostListener, ElementRef, Renderer, ViewContainerRef,OnInit} from '@angular/core';
import { ActivatedRoute, Router, ActivatedRouteSnapshot, RouterState, RouterStateSnapshot } from '@angular/router';
@Component({
  selector: 'top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent implements OnInit {
  userName="";
  constructor(public router: Router) { }

  ngOnInit() {
           this.userName =  localStorage.getItem("userName");
  }
  public signOut(){
      localStorage.setItem("token",""); 
      this.router.navigateByUrl("login");
  }
}
