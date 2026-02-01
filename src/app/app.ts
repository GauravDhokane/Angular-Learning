import { CommonModule, NgIf } from '@angular/common';
import { afterRenderEffect, Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from './user/user';
import { CurrencyConverterPipe } from './pipe/currency-converter-pipe';
import {afterNextRender} from '@angular/core';


//below is known as Decorator ->@Component{}
@Component({
  selector: 'app-root',
  imports: [User,CommonModule,CurrencyConverterPipe,NgIf],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
// Component life cycle 
/*
  

*/
export class App {

  @ViewChild('user') User!:any;
  count=0;
  constructor(){
    // afterNextRender(()=>{
    //   console.log("AfterRender",this.User.counter);
    // })
    //check how to use above method also and another render method also on document
  }
  updateCounter(){
    this.count++;
  }
}
