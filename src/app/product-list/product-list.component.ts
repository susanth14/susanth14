import { Component } from '@angular/core';
import {Router} from '@angular/router'


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: any[] = [
    {name:'Cricekt Bat',
      image:'https://www.sstoncricket.com/wp-content/uploads/2023/04/ew_waves_1_1.jpg',
      price: 1499,
      count:0,
      description:"leather Ball Cricket Bat",
  },
  {name:'Basket Ball',
      image:'https://www.ncaa.org/images/2023/3/30/MBB-WBB-Basket.JPG',
      price: 800,
      count:0,
      description:"Basketball for casco ",
  },
  {name:'Nee Pad',
  image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRVeBNUB2d-UMIWOZOx09zfciktjfRSwxevw&usqp=CAU',
  price: 1000,
  count:0,
  description:"Nee pad its product from Nee.",
},
{name:'shutlecock',
  image:'https://www.jiomart.com/images/product/original/rvjm6gonfe/megaplay-maxx-badminton-feather-shuttlecock-10-pcs-box-product-images-orvjm6gonfe-p591685982-0-202205290110.jpg?im=Resize=(1000,1000)',
  price: 600,
  count:0,
  description:"shuttlecock for batmitton",
},
{name:'Glows',
  image:'https://5.imimg.com/data5/QX/VR/WD/SELLER-12035207/soft-fit-cricket-batting-gloves.jpg',
  price: 1099,
  count:0,
  description:"cricket gloves observe the sweat.",
},
  ]
  decrement(product:any) {
    if (product.count > 0){
      product.count--;
      this.addToLocalStorage(product);
    }
  }
  increment(product:any) {
      product.count++;
      this.addToLocalStorage(product);
  }
  addToLocalStorage(product: any) {
    const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
    const existingItemIndex = cartItems.findIndex((item: any) => item.name === product.name);
    if (existingItemIndex !== -1) {
      cartItems[existingItemIndex].count = product.count;
    } else {
      cartItems.push({ name: product.name, rate: product.price, count: product.count });
      console.log(product.count);
      
    }
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }
    // quantityInput.value = '0';
  constructor(private router: Router){}
  viewcart(){
    this.router.navigate(['/login'])
  }
}













