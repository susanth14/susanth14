import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.css']
})
export class ViewCartComponent implements OnInit {
  cartItems:any [] = []
  
  ngOnInit(): void {
    this.cartItems=JSON.parse(localStorage.getItem('cartItems')||'[]')
  }
  total: number = 0;
  calculateTotal(){
    this.total = this.cartItems.reduce((sum, item) => {
      if(item.selected){
        return sum + (item.rate *item.count)
      }
      return sum;
    },0)
  }
  constructor(private router: Router) {}
  
  selectedItem(){
    const selectedItem = this.cartItems;
    const queryParams = {items: JSON.stringify(selectedItem)};
    this.router.navigate(['/selected-item'], {queryParams})
  }
}
