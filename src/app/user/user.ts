import { Component, EventEmitter, Input, Output, output } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.scss'
})
export class User {
  users=['Anil','bunty','tata','bata','john'];
  @Output() getUser = new EventEmitter();
  LoadData(){
    this.getUser.emit(this.users);
  }

}
