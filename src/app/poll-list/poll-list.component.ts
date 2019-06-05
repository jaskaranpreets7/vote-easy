import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-poll-list',
  templateUrl: './poll-list.component.html',
  styleUrls: ['./poll-list.component.css']
})
export class PollListComponent implements OnInit, AfterViewInit {
  @ViewChild('canvas') canvas:ElementRef;

  public polls : any[];
  public chart :any[];
  public showChart:boolean = false;

  constructor(private appService :AppService , private router: Router) { }

  ngOnInit() {
   this.appService.getDetails()
    .subscribe(res =>{ 
      this.polls = res;
    })
  }

  getPollDetails(id:number):any{
    this.router.navigate([`poll-details/${id}`])
  }


  ngAfterViewInit(){
    setTimeout( () => { this.chart = new Chart(this.canvas.nativeElement.getContext('2d'),{
      type: 'bar',
      data:{
        labels: ["AAP","BJP", "Congress"],
        datasets: [
          {
            data: [ 29, 75, 40, 0],
            borderColor: '#3cba9f',
            fill: false
          },
        
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }]
        }
      }
    }) }, 1)
  }

}
