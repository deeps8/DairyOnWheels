import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  constructor(public productService: ProductService) { }

  ngOnInit() {
  }

  countItems(){
    let count = 0;
    this.productService.virtualCartItems.forEach(item => {
        count = count + (1*item.quantity);
    });

    return count;
  }

  calCost(){
    let price = 0;
    this.productService.virtualCartItems.forEach(item => {
        price = price + (item.product.productPrice*item.quantity);
    });

    return price;
  }

}
