import { Headers, Http } from '@angular/http';
export  class DoHttp{
	transform(http,opt,success) {
		let header= new Headers();
		function get(){
			 let o = opt;
			 let req = getReq();
			 $.loading();
		     header.append('Content-Type', 'application/x-www-form-urlencoded');


		     http.get(o.url+"?" +req, {headers: header})
		     .map(res => res.json()).subscribe(data=> {
		     	$.loaded();
		     	success(data);
		     }),
		     err =>{
		     	$.loaded();
		     	success(false)
		     },
		     () => console.log('Register Complete');
		}
		function post(){
			 let o = opt;
			 let req = getReq();
			 $.loading();
		     header.append('Content-Type', 'application/x-www-form-urlencoded');
		     http.post(o.url,req,{headers: header})
		     .map(res => res.json()).subscribe(data=> {
		     	$.loaded();
		     	success(data);
		     }),
		     err =>{
		     	$.loaded();
		     	success(false)
		     },
		     () => console.log('Register Complete');
		}
		function getReq(){
			let _opt = opt;
			let req="";
			for(let key in _opt.req){
				req += "&"+key+"="+_opt.req[key];
			}
			return req.substring(1,req.length);
		}
     let promise = new Promise(eval('(' + opt.type + ')'));
        promise.then(function(val){
		    return val;
		}).catch(function(e){
			console.log(e);
		})
   	}
	
}