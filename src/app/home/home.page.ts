import { Component,OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FilterComponent } from '../modals/filter/filter.component';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  implements OnInit{

  loading:boolean = false;
  productDetails: Array<any> = [];


  constructor(private modalCtrl: ModalController,
              private productService: ProductService) {
    
  }
  
  ngOnInit(): void {
    
    // geting all products
    this.getAllProduct();

    
  }


  getAllProduct(){
    this.productService.allProduct().subscribe(res=>{
      if(res.successCode === "API_SUCCESS"){
        this.productDetails = res.extraData.PRODUCT;
        this.loading = true;
        console.log(this.productDetails);
      }
    });
  }


  async presentFilterModal() {
    const modal = await this.modalCtrl.create({
      component: FilterComponent,
      cssClass: 'filter-modal',
      componentProps:{
        name:name
      }
    });
    return await modal.present();
  }
  
}
