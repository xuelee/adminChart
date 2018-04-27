import { Component, HostListener, ElementRef, Renderer, ViewContainerRef} from '@angular/core';
import { ActivatedRoute, Router, ActivatedRouteSnapshot, RouterState, RouterStateSnapshot } from '@angular/router';
import { TranslateService } from 'ng2-translate';
import 'rxjs/add/operator/merge';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Constant } from './models/constant-model';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	private globalClickCallbackFn: Function;
	private loginSuccessCallbackFn: Function;
	public constant: Constant = new Constant();
	constructor(
		public elementRef: ElementRef,
		public renderer: Renderer,
		public router: Router,
		public activatedRoute: ActivatedRoute,
		public translate: TranslateService,
		public toastr: ToastsManager,
		public vcr: ViewContainerRef
		
		
	) {
		this.toastr.setRootViewContainerRef(vcr);
	}

	ngOnInit() {
		this.globalClickCallbackFn = this.renderer.listen(this.elementRef.nativeElement, 'click', (event: any) => {
			//console.log(event);
			// var obj=document.elementFromPoint(event.clientX,event.clientY);
			// console.log(obj);

		});
		//this.constant.remove('user.token')
		this.translate.addLangs(["zh", "en"]);
		this.translate.setDefaultLang('zh');

		const browserLang = this.translate.getBrowserLang();
		//console.log("检测到的浏览器语言>" + browserLang);
		this.translate.use(browserLang.match(/zh|en/) ? browserLang : 'zh');
		//is login
		//console.log(this.constant.local['token'] == null);
		if(this.constant.local['token'] == null){
			this.router.navigateByUrl("login");
		}
		
	}

	ngOnDestroy() {
		if (this.globalClickCallbackFn) {
			this.globalClickCallbackFn();
		}
	}
}