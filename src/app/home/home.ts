import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  constructor(private router:Router){}
  gotoProfile(naming:string){
    this.router.navigate(['profile'],{queryParams:{name:naming}});
  }
  users=[
    {
      id:'1',
      name:'garry',
      age:20,
      email:'garry@zoho.com'
    },
    {
      id:'2',
      name:'harry',
      age:24,
      email:'harry@zoho.com'
    },
    {
      id:'3',
      name:'zarry',
      age:27,
      email:'zarry@zoho.com'
    },
    {
      id:'4',
      name:'marry',
      age:25,
      email:'marry@zoho.com'
    },
    {
      id:'5',
      name:'tarry',
      age:10,
      email:'tarry@zoho.com'
    }
  ]

}
