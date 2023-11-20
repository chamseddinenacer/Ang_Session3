import { Component, OnInit } from '@angular/core';
import { MemberService } from '../services/member.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-memeber',
  templateUrl: './add-memeber.component.html',
  styleUrls: ['./add-memeber.component.css']
})
export class AddMemeberComponent implements OnInit {
  members: any[] = [];
  newMember: any = {};

  constructor(private membersService:MemberService,  private router: Router) {}

  ngOnInit() {
    // this.members = this.membersService.getMemebers();
  }

  addMemeber():void {

    if(this.newMember){
    
      this.membersService.addMemeber(this.newMember);
      this.newMember = {}; 
      this.members = this.membersService.getMemebers();  
      console.log("dsdsdsdsddsd")

     this.router.navigate(['/membersList']);
    }
    else{
      console.log("leeeeeeeeeeeeeeeee")
    }
    
      }


}
