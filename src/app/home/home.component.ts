import { Component, OnInit } from '@angular/core';
import { MemberService } from '../services/member.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  members: any[] = [];
  newMember: any = {};

  constructor(private membersService:MemberService) {}

  ngOnInit() {
    this.members = this.membersService.getMemebers();
  }

  deleteMemeber(id: number) {
    this.membersService.deleteMemeber(id);
    this.members = this.membersService.getMemebers();  
  }


  addMemeber():void {

if(this.newMember){

  this.membersService.addMemeber(this.newMember);
  this.newMember = {}; 
  this.members = this.membersService.getMemebers();  
  console.log("dsdsdsdsddsd")
}
else{
  console.log("leeeeeeeeeeeeeeeee")
}

  }

}