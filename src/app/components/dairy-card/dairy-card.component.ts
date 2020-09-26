import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'dairy-card',
  templateUrl: './dairy-card.component.html',
  styleUrls: ['./dairy-card.component.scss'],
})
export class DairyCardComponent implements OnInit {

  @Input() details:any;
  @Input() type:string;

  constructor(
          private router:Router,
          public productService: ProductService,
          private toastCtrl: ToastController,
          ) {
   }

  ngOnInit() {
    
  }

  //virtualing adding the item to Vcart
  addItemVcart(opteration){
    this.productService.addItemToVcart(this.details,opteration);
    localStorage.setItem('virtualCart',JSON.stringify(this.productService.virtualCartItems));
  }

  checkInCart():boolean{
    if(this.productService.checkItemInVCart(this.details.productId) < 0)
      return false;
    else
      return true;
  }

  getItemCount():number{
    const index = this.productService.checkItemInVCart(this.details.productId);
    return this.productService.virtualCartItems[index].quantity;
  }




  async presentToastWithOptions() {
    const toast = await this.toastCtrl.create({
      header: 'Toast header',
      message: 'Click to Close',
      position: 'top',
      buttons: [
        {
          side: 'start',
          icon: 'star',
          text: 'Favorite',
          handler: () => {
            console.log('Favorite clicked');
          }
        }, {
          text: 'Done',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    toast.present();
  }

  removeUnder(str:string){
    return  str.replace(/_/g," ").toLowerCase();
  }

  getWeight(str:string){
      var gms = str.toLowerCase().split('_')
    return `${gms[1]} ${gms[0]}`;
  }
  
  routeTo(path,pid){
    this.router.navigate([path,pid]);
  }

}
