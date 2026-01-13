import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.scss'
})
export class User {
  constructor(private route:ActivatedRoute){}
  name:null|string="";

  ngOnInit(){
    this.route.params.subscribe((params)=>{
      console.log(params);
      this.name=params['name'];
    })
  }
}
