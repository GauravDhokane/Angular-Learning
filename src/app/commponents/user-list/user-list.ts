import { Component, signal } from '@angular/core';
import { UserService } from '../../services/user-service';
import { users } from '../../services/userdatatype';
import { TitleCasePipe } from '@angular/common';


@Component({
  selector: 'app-user-list',
  imports: [TitleCasePipe],
  templateUrl: './user-list.html',
  styleUrl: './user-list.scss'
})
export class UserList {
  userData=signal<users[]|undefined>(undefined);
  constructor(private userservice:UserService){

  }
  ngOnInit(){
    this.getUser()
  }
  getUser(){
    this.userservice.getUsers().subscribe((data)=>{
      console.log(data);
      this.userData.set(data);
    })
  }
  deleteUser(id:number|undefined){
    console.log(id);
    if(id){
      this.userservice.deleteUser(id).subscribe((resp)=>{
        if(resp){
          this.getUser();
        }
      })
    }
  }
}
