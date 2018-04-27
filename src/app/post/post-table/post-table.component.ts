import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { flyIn } from '../../animations/fly-in';
import { BrowserModule } from '@angular/platform-browser';
import { Headers, Http } from '@angular/http';
import { Constant } from '../../models/constant-model';
import { Page } from '../../models/page-model';
import { DateFormat } from '../../animations/dateFormat';

@Component({
  selector: 'post-table',
  templateUrl: './post-table.component.html',
  styleUrls: ['./post-table.component.scss'],
  animations: [
    flyIn
  ]
})
export class PostTableComponent implements OnInit {
  public constant: Constant = new Constant();
  public list: Array<JSON> = new Array;
  
   funnel = {
      title: {
          text: '用户转化率',
          subtext: ''
      },
      tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c}%"
      },
      toolbox: {
          feature: {
              dataView: {readOnly: false},
              restore: {},
              saveAsImage: {}
          }
      },
      legend: {
          data: ['激活数','注册数','投资数']
      },
      series: [
      {
            name:'用户数预期',
            type:'funnel',
            left: '10%',
            width: '80%',
            label: {
                normal: {
                    formatter: '{b}预期'
                },
                emphasis: {
                    position:'inside',
                    formatter: '{b}预期: {c}%'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    opacity: 0.7
                }
            },
            data: [
                {value: 100, name: '激活数'},
                {value: 70, name: '注册数'},
                {value: 40, name: '投资数'}
            ]
        },
        {
            name:'用户数分析',
            type:'funnel',
            left: '10%',
            width: '80%',
            maxSize: '80%',
            label: {
                normal: {
                    position: 'inside',
                    formatter: '{c}%',
                    textStyle: {
                        color: '#fff'
                    }
                },
                emphasis: {
                    position:'inside',
                    formatter: '{b}实际: {c}%'
                }
            },
            itemStyle: {
                normal: {
                    opacity: 0.5,
                    borderColor: '#fff',
                    borderWidth: 2
                }
            },
            data: [
                {value: 0, name: '激活数'},
                {value: 0, name: '注册数'},
                {value: 0, name: '投资数'}
            ]
        }
    ]
  };
  public pie = {
     title : {
          text: '总存量',
          subtext: '',
          x:'center'
      },
      tooltip : {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      legend: {
          orient: 'vertical',
          left: 'left',
          data: ['定期存量','活期存量']
      },
      series : [
          {
              name: '存量',
              type: 'pie',
              radius : '55%',
              center: ['50%', '60%'],
              data:[
                  {value:0, name:'定期存量'},
                  {value:0, name:'活期存量'}
              ],
              itemStyle: {
                  emphasis: {
                      shadowBlur: 10,
                      shadowOffsetX: 0,
                      shadowColor: 'rgba(0, 0, 0, 0.5)'
                  }
              }
          }
      ]
  };
  public bar =  {
    title : {
        text: '用户数',
        subtext: '昨日今日对比',
        x:'center'
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data:['昨日','今日']
    },
    toolbox: {
        show : true,
        feature : {
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            data : ['激活数','注册数','投资数']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'昨日',
            type:'bar',
            data:[0, 0, 0]
        },
        {
            name:'今日',
            type:'bar',
            data:[0, 0, 0]
        }
    ]
}
userName:string;
  constructor(public router: Router,public http:Http,
      public activeRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.userName =  this.constant.local['userName'] ;
     if(this.constant.local['token'] == null||this.constant.local['token'] == ""){
            this.router.navigateByUrl("login");
    }
    let l = JSON.parse(this.constant.local['menu']);
    for(let i=0;i<l.length;i++){
      if(l[i].urlkey == 'index'){
        this.getIndex();
        break;
      }
    }
    
  }
  public getIndex():void{
    let _this = this;
    let header= new Headers();
        header.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http.get(_this.constant.root+"ydmgmt/api/statistics/queryIndexStatis"+"?token=" +_this.constant.local['token'], {headers: header})
        .map(res => res.json()).subscribe(data=> {
                if(data.code == "0"){
                // let zc = (data.result.registerUserNum/data.result.activeNum)*100;
                // let tz = (data.result.rechargeUserNum/data.result.activeNum)*100;
                // _this.funnel.series[1].data=
                // [ {value: 100, name: '激活数'},
                //     {value: (zc*100)/100, name: '注册数'},
                //     {value: (tz*100)/100, name: '投资数'}];
                //     _this.pie.series[0].data=
                // [ {value: data.result.dueRechargeAmount.replace(/,/g, ''), name: '定期存量'},
                    // {value: data.result.walletRechargeAmount.replace(/,/g, ''), name: '活期存量'}]; 
                    // _this.bar.series[0].data = [ data.result.yesterdayReport.activeNum,data.result.yesterdayReport.registerUserNum,data.result.yesterdayReport.rechargeUserNum];
                    // _this.bar.series[1].data = [ data.result.todayReport.activeNum,data.result.todayReport.registerUserNum,data.result.todayReport.rechargeUserNum];
                
                _this.list.push(data.result);
                }else{
                alert(data.errorMsg);
                }
        }),
        err =>{
            
        },
        () => console.log('Register Complete');
  }

}
