import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';


@Component({
  selector: 'app-poll-detail',
  templateUrl: './poll-detail.component.html',
  styleUrls: ['./poll-detail.component.css']
})
export class PollDetailComponent implements OnInit {

  public pollDetails: any[];
  public memberDetails :any = {};
  public id:number;
  vote : number = 0;
  detail : boolean;
  selectedValue:string;

  constructor(private route: ActivatedRoute , private appService : AppService) { 
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
          this.memberDetails = response;
            for(let i = 0 ; i < this.memberDetails.length; i++){
              if( this.selectedValue === this.memberDetails[i].name){
                this.memberDetails = this.memberDetails[i];
                return this.memberDetails;
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

  onVote():void{
    this.vote = this.memberDetails.votes;
    this.vote++;
    
    let updatedData = {...this.memberDetails, votes: this.vote};
    console.log(updatedData)
    // this.appService.addVoteCount(updatedData)
  }

  
}
