import { Routes } from '@angular/router';
import { About } from './about/about';
import { Login } from './login/login';
import { Contact } from './contact/contact';
import { Home } from './home/home';

//this is the file where we have to enter all the components where we want to
//route the angular page and also need to give path and component and need to import that

export const routes: Routes = [
  {path:'about',component:About},
  {path:'login',component:Login},
  {path:'contact',component:Contact},
  {path:'home',component:Home}
];
