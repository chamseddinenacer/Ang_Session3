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

     
    
      this.membersService.addMemeber(this.newMember);
      this.newMember = {}; 
      this.members = this.membersService.getMemebers();  
      

     this.router.navigate(['/membersList']);
   
   
    
      }


}
