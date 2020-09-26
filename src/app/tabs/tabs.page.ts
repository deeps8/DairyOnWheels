import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  inCartTab:boolean = true;
  constructor(
            private productService: ProductService,
            private navCtrl: NavController,
            private router: Router
            ) { 
            
            }

  ngOnInit() {
    
  }

  tabChanged($ev){
    console.log();
    if(this.router.url.includes('/cart')){
      this.inCartTab = false;
    }
    else{
      this.inCartTab = true; 
    }

    console.log($ev.tab);
    this.navCtrl.navigateRoot($ev.tab);

  }

  countItems(){
    let count = 0;
    this.productService.virtualCartItems.forEach(item => {
        count = count + (1*item.quantity);
    });

    return count;
  }

}
