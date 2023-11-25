import { Component, OnInit } from '@angular/core';
import { MemberService } from '../services/member.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  members: any[] = [];

  detailmembers: any;

  newMember: any = {};
  isdelete=false;

  constructor(private membersService:MemberService,private router: Router) {}

  ngOnInit() {
    this.members = this.membersService.getMemebers();
  }

  deleteMemeber(id: number) {
    this.membersService.deleteMemeber(id);
    this.members = this.membersService.getMemebers();  
    this.isdelete=true

    setTimeout(() => {
      this.isdelete = false;
    }, 2000);

  }


  addMemeber():void {

if(this.newMember){

  this.membersService.addMemeber(this.newMember);
  this.newMember = {}; 
  this.members = this.membersService.getMemebers();  
  console.log("ADD")
}
else{
  console.log("NN")
}

  }


  showMemberDetail(memberid: any) {
    this.router.navigate(['/member', memberid]);
  }


}