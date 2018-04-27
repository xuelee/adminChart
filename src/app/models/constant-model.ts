
export class Constant {
    root: string ="http://manage.test.yd-jr.cn/";
    //root: string ="http://192.168.31.215:8071/";
    local:object;
    params={};
    constructor(){
    	this.getLocalItem();
    	if(document.domain != 'localhost'){
            this.root = window.location.protocol+"//"+document.domain+"/";
          
        }

    }
    public getLocalItem() {
    	var local = {};
    	for(var key in localStorage){
    		local[key]=localStorage.getItem(key);
    	}
    	this.local = local;
        this.params['token'] = local['token'];
    }
    public removeLocalItem(key : string) {
    	if(localStorage.getItem(key) != null){
    		localStorage.removeItem(key);
    	}	
    }
    public setLocalItem(key : string,value : string) {
        localStorage.setItem(key,value);
    }
    public getParams(reqs){
        let params = "";
        for(let key in reqs){
            params += key + "=" +encodeURIComponent(reqs[key]) + "&";
        }
        return params.substring(0,params.length-1);
    }
    public checkCode(code){

        switch (code) {
            case "21014":
                alert("登录失效，请重新登录");
                window.location.href=window.location.protocol+"//"+document.domain;
               
                break;
            case "404":
                alert("登录失效，请重新登录");
                window.location.href=window.location.protocol+"//"+document.domain;
                break;
                
            default:
                // code...
                break;
        }
    }
    public getLocalToJSON(key){

        try{
              let json = JSON.parse(localStorage.getItem(key));
              return json;
         }catch(e){
             return false;
         };
       
       
    }
}
