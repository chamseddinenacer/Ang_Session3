import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor() { }


  private members: any[] = [
    { id: 1, nom: 'chamseddine', prenom: 'nacer',role:'responsable dev',imageUrl: '' },
    { id: 2, nom: 'cherif', prenom: 'khalifa' ,role:'responsable iot',imageUrl: '  '},
    { id: 3, nom: 'fadwa', prenom: 'fadwa' ,role:'presidente',imageUrl: ''},
    { id: 4, nom: 'hazar', prenom: 'hazar' ,role:'Secrétaire général',imageUrl: ''},
    { id: 5, nom: 'ghofran', prenom: 'ghofran' ,role:'finances',imageUrl: ''},
    { id: 6, nom: 'ranya', prenom: 'ranya' ,role:'member actif',imageUrl: ''},
    { id: 7, nom: 'minyar', prenom: 'minyar' ,role:'member actif',imageUrl: ''},
    { id: 8, nom: 'sarra', prenom: 'sarra' ,role:'member actif',imageUrl: ''},
    { id: 9, nom: 'hela', prenom: 'hela' ,role:'member actif',imageUrl: ''},
    
 
  ];

  getMemebers() {
    return this.members;
  }

  getMemeberById(id: number) {
    return this.members.find(member => member.id === id);
  }

  addMemeber(member: any) {
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
