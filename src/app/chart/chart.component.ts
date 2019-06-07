import { Component, OnInit, AfterViewInit, ElementRef, ViewChild, Input , OnChanges } from '@angular/core';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit,OnChanges{

  @Input() votes:any;
  @Input() parties:any;
  @ViewChild('canvas') canvas:ElementRef;

  public chart :any[];

  constructor() {}
  
  ngOnInit() {}

  ngOnChanges(changes){
    this.parties = changes.parties.currentValue;
    this.votes = changes.votes.currentValue;
    setTimeout( () => { 
      this.chart = new Chart(this.canvas.nativeElement.getContext('2d'),
      {
      type: 'bar',
      data:{
        labels: this.parties,
        datasets: [
          {
            data: this.votes,
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
