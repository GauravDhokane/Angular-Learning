import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../services/user-service';
import { users } from '../../services/userdatatype';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  imports: [ReactiveFormsModule],
  templateUrl: './add-user.html',
  styleUrl: './add-user.scss'
})
export class AddUser {
  name = new FormControl('');
  email = new FormControl('');
  age = new FormControl('');
  
  constructor(private userservice:UserService, private router:Router){

  }

  addUser(){
    let name = this.name.value;
    let age = this.age.value;
    let email = this.email.value;
    
    if(name && age && email){
      let data:users={
        name:name,
        age:Number(age),
        email:email
      }
      this.userservice.postUsers(data).subscribe((resp)=>{
        if(resp){
          this.router.navigate(['/']);  // this is used to redirect the page to userdetail again
        }
      })
    }
  }
}
