import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-poll-list',
  templateUrl: './poll-list.component.html',
  styleUrls: ['./poll-list.component.css']
})
export class PollListComponent implements OnInit {
  public polls : any[];
  public votes : any[] = [];
  public parties : any[] = [];
  chartData : any = {};
  showPoll:boolean = true;

  constructor(private appService :AppService , private router: Router) { 
      if(!this.appService.showPolls){
        this.showPoll = false;
        this.giveChartData();
      }
  }

  ngOnInit():void {
   this.appService.getDetails()
    .subscribe(res =>{ 
      this.polls = res;
    })  
  }

  getPollDetails(id:number):any{
    this.router.navigate([`poll-details/${id}`]);
  }

  
  giveChartData(){
    let result = [];
    this.appService.getMemberDetails()
      .subscribe(
        res => {
          result = res;
          for(let i = 0 ; i < result.length ; i++){
              let item = result[i];
              if(!this.chartData.hasOwnProperty(item.party)){
                  this.chartData[item.party] = null;
                }else{
                  this.chartData[item.party] = 0;
                }
            };
          result.forEach(item => {
              this.chartData[item.party] += item.votes;
            });
            this.parties = Object.keys(this.chartData)
            this.votes = Object.values(this.chartData)
          }
        )
  }
}
