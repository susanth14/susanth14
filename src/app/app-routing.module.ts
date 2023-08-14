import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ViewCartComponent } from './view-cart/view-cart.component';
import { ProductinfoComponent } from './productinfo/productinfo.component';
import { SelectedItemComponent } from './selected-item/selected-item.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth-card';

const routes: Routes = [
    {path:'',component:ProductListComponent},
    {path:'view-cart',component:ViewCartComponent,canActivate:[AuthGuard]},
    {path:'productinfo',component:ProductinfoComponent},
    {path:'selected-item',component:SelectedItemComponent,canActivate:[AuthGuard]},
    {path:'login',component:LoginComponent}
    
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }