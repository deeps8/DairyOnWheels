import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'cart-toast',
  templateUrl: './cart-toast.component.html',
  styleUrls: ['./cart-toast.component.scss'],
})
export class CartToastComponent implements OnInit {

  @Input() type:string;
  constructor(
              public productService: ProductService,
              public router: Router) {

  }

  ngOnInit() {}

  calCost(){
    let price = 0;
    this.productService.virtualCartItems.forEach(item => {
        price = price + (item.product.productPrice*item.quantity);
    });

    return price;
  }

  countItems(){
    let count = 0;
    this.productService.virtualCartItems.forEach(item => {
        count = count + (1*item.quantity);
    });

    return count;
  }

  orderItems(){
  }

}
