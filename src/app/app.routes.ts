import { Routes } from '@angular/router';
import { ProductList } from './product-list/product-list';
import { ProductDetails } from './product-details/product-details';
import { UserList } from './commponents/user-list/user-list';
import { AddUser } from './commponents/add-user/add-user';


//this is the file where we have to enter all the components where we want to
//route the angular page and also need to give path and component and need to import that

export const routes: Routes = [
    
    {
        path:'', component:UserList 
    },
    {
        path:'add', component:AddUser    
    }
];
