import { Component, OnInit } from '@angular/core';
import { MemberService } from '../services/member.service';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
  members: any[] = [];
  newMember: any = {};

  isadd=false;

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
  // this.newMember = {}; 
  this.members = this.membersService.getMemebers();  
  console.log("dsdsdsdsddsd")

  this.isadd=true;

  

 setTimeout(() => {
  this.isadd = false;
}, 2000);


}
else{
  console.log("leeeeeeeeeeeeeeeee")
}

  }

}