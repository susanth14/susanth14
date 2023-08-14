import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ViewCartComponent } from './view-cart/view-cart.component';
import { ProductinfoComponent } from './productinfo/productinfo.component';
import { SelectedItemComponent } from './selected-item/selected-item.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth-card';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ViewCartComponent,
    ProductinfoComponent,
    SelectedItemComponent,
    LoginComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
