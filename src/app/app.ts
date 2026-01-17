import { Component, computed, effect, signal, WritableSignal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';



//below is known as Decorator ->@Component{}
@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
// Basic reactive Forms in Angular
/*
  when we have to deal with complex forms then we need to check it
  what is formcontrol and reactiveforms we need to check that

*/
export class App {
  name=new FormControl();//we can give default value also here in the brackets with single inverted quoma
  password = new FormControl();
  displayValue(){
    console.log(this.name.value);
    console.log(this.password.value);
  }
  setValues(){
    this.name.setValue('Gaurav');
    this.password.setValue('32416272');
  }
}
