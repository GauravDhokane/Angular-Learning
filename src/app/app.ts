import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


//below is known as Decorator ->@Component{}
@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
// Reactive form Vaidations
/*
  Validations

*/
export class App {

  Profilegrp = new FormGroup({
     name:new FormControl('',[Validators.required]),//we can give default value also here in the brackets with single inverted quoma
     password:new FormControl('',[Validators.required,Validators.minLength(5)]),//this are the default values
     email:new FormControl('',[Validators.required,Validators.maxLength(20),Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
  })
  //getter method of all props
  get name(){
    return this.Profilegrp.get('name');
  }
  get password(){
    return this.Profilegrp.get('password');
  }
  get email(){
    return this.Profilegrp.get('email');
  }
  submit(){
    console.log(this.Profilegrp.value);
  }
  setvalues(){
    this.Profilegrp.setValue({
      name:'peter',
      password:'peteer@123',
      email:'ptata@gmail.com'
    });
  }
}
