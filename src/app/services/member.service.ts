import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor() { }


  private members: any[] = [
    { id: 1, firstname: 'chamseddine', lastname: 'nacer',role:'responsable dev',phone:29225523,email:'chams@gmail.com',imageUrl: 'https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Image.png' },
    { id: 2, firstname: 'cherif', lastname: 'khalifa' ,role:'responsable iot',phone:29225523,email:'cherif@gmail.com',imageUrl: 'https://cdn.pixabay.com/photo/2019/08/11/18/59/icon-4399701_1280.png'},
    { id: 3, firstname: 'fadwa', lastname: 'fadwa' ,role:'presidente',phone:29225523,email:'fadwa@gmail.com',imageUrl: 'https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Image.png'},
    { id: 4, firstname: 'hazar', lastname: 'hazar' ,role:'Secrétaire général',phone:29225523,email:'hazar@gmail.com',imageUrl: 'https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Image.png'},
    { id: 5, firstname: 'ghofran', lastname: 'ghofran' ,role:'finances',phone:29225523,email:'ghofran@gmail.com',imageUrl: 'https://cdn.pixabay.com/photo/2019/08/11/18/59/icon-4399701_1280.png'},
    { id: 6, firstname: 'ranya', lastname: 'ranya' ,role:'member actif',phone:29225523,email:'ranya@gmail.com',imageUrl: 'https://cdn.pixabay.com/photo/2019/08/11/18/59/icon-4399701_1280.png'},
    { id: 7, firstname: 'minyar', lastname: 'minyar' ,role:'member actif',phone:29225523,email:'minyar@gmail.com',imageUrl: 'https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Image.png'},
    { id: 8, firstname: 'sarra', lastname: 'sarra' ,role:'member actif',phone:29225523,email:'sarra@gmail.com',imageUrl: 'https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Image.png'},
    { id: 9, firstname: 'hela', lastname: 'hela' ,role:'member actif',phone:29225523,email:'hela@gmail.com',imageUrl: 'https://cdn.pixabay.com/photo/2019/08/11/18/59/icon-4399701_1280.png'},
    
 
  ];

  getMemebers() {
    return this.members;
  }

  getMemeberById(id: number) {
    return this.members.find(member => member.id === id);
  }

  addMemeber(member: any) {
    member.id = this.members.length + 1;  
    this.members.push(member);
  }

  updateMemeber(member: any) {
    const index = this.members.findIndex(e => e.id === member.id);
    if (index !== -1) {
      this.members[index] = member;
    }
  }

  deleteMemeber(id: number) {
    this.members = this.members.filter(member => member.id !== id);
  }






}
