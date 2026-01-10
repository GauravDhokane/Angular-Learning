import { Component, computed, effect, signal, WritableSignal } from '@angular/core';
import { NgFor } from '@angular/common';

//below is known as Decorator ->@Component{}
@Component({
  selector: 'app-root',
  imports: [NgFor],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
//ngfor Directives In Angular
/*
 we can loop in our template file using this (html file)
*/
export class App {
  students=["anil","peter","gaurav","tata","bata"];
  studentdata=[
    {
      name:"garry",
      age:20,
      city:"Pune"
    },
    {
      name:"harry",
      age:21,
      city:"Mumbai"
    },
    {
      name:"toty",
      age:23,
      city:"Nagar"
    }
  ];
}
