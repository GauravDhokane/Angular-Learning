import { Component, computed, effect, signal, WritableSignal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';



//below is known as Decorator ->@Component{}
@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
// Reactive form grouping
/*
  FormGroup read about this

*/
export class App {

  Profilegrp = new FormGroup({
     name:new FormControl('Gaurav'),//we can give default value also here in the brackets with single inverted quoma
     password:new FormControl('tata@123'),//this are the default values
     email:new FormControl('garry@zoho.com')
  })
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
