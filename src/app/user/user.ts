import { Component, EventEmitter, Input, Output, output } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.scss'
})
export class User {

  @Input() counter=0;
  constructor(){
    console.log("constructor");
  }
  ngOnInit(){
    console.log("ngoninit");
  }
  ngOnChanges(){
    console.log("ngonchange")
  }
  ngOnDestroy(){
    console.log("destroy");
  }
}
