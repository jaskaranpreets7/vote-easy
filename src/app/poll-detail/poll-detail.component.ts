import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../app.service';


@Component({
  selector: 'app-poll-detail',
  templateUrl: './poll-detail.component.html',
  styleUrls: ['./poll-detail.component.css']
})
export class PollDetailComponent implements OnInit {

  public pollDetails: any[];
  public members:any[];
  public memberDetails :any = {};
  public id:number;
  vote : number = 0;
  detail : boolean;
  selectedValue:string;

  constructor(private route: ActivatedRoute , private appService : AppService, private router : Router) { 
    this.getPolls();
  }

  ngOnInit() {
   
  }

  getPolls():any{
    this.id = +this.route.snapshot.paramMap.get('id');
    
    this.appService.getDetails()
      .subscribe(res => {
          this.pollDetails = res;
          for(let i = 0 ; i<this.pollDetails.length;i++){
            if(this.id === this.pollDetails[i].id){
              this.pollDetails = this.pollDetails[i].persons;
              return this.pollDetails;
            }
           }
      })

  }

  getMemberDetail($event):any{
    this.selectedValue = $event.target.value;
    
    if(this.selectedValue !== "Select Here"){

      this.appService.getMemberDetails()
        .subscribe(response => {
          this.members = response;
            for(let i = 0 ; i < this.members.length; i++){
              if( this.selectedValue === this.members[i].name){
                this.memberDetails = this.members[i];
            }
          }
        })
      }
      
      if(this.selectedValue === "Select Here"){
        this.detail = false;
      }else{
        this.detail = true;
      }
      
  }

  onVote():any{
    this.vote = this.memberDetails.votes;
    this.vote++;
    
    let updatedData = {...this.memberDetails, votes: this.vote};
    for(let i = 0; i < this.members.length; i++){
      if(this.members[i].name === updatedData.name){
        this.appService.addVoteCount(updatedData, i)
      }
    }
    
    this.appService.showPollChart();
    setTimeout(() =>{ this.router.navigate(['polls'])}, 500)
  }

  back(){
    this.router.navigate(['polls'])
  }
}
