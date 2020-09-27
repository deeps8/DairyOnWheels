import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-upload-product',
  templateUrl: './upload-product.page.html',
  styleUrls: ['./upload-product.page.scss'],
})
export class UploadProductPage implements OnInit {

  uploadForm: FormGroup;
  constructor(
              private productService: ProductService,
              private alert: AlertController,
              private router: Router,
              private loadctrl: LoadingController,
              private toastctrl: ToastController
  ) {

   }

  ngOnInit() {
    // form value
    this.uploadForm = new FormGroup({
      productName: new FormControl("", []),
      productDescription: new FormControl("", []),
      productImage: new FormControl("https://ml0co0iaphua.i.optimole.com/JAgwYyw-W6IRpOlr/w:1000/h:1000/q:auto/https://gharstuff.com/wp-content/uploads/2019/03/Amul-Gold-Milk-500ml.jpg", []),
      productCategory: new FormControl("0", []),
      discount: new FormControl("0.00", []),
      productType: new FormControl("1", []),
      productPrice: new FormControl("", []),
      inventoryCount: new FormControl("", []),
      brandType: new FormControl("1", []),
      productSizeVariant: new FormControl("0", []),
    });
  }

  

  addProduct(val){

    val.productCategory = parseInt(val.productCategory);
    val.productType = parseInt(val.productType);
    val.brandType = parseInt(val.brandType);
    val.productSizeVariant = parseInt(val.productSizeVariant);

    console.log(val);

    this.presentLoading("Uploading Product...")
    
    this.uploadForm.reset();
    
    this.productService.uploadProduct(val).subscribe(res=>{
      this.loadctrl.dismiss();
      if(res.successCode === "API_SUCCESS"){
        console.log(res);
        this.presentAlert("Success","Product Uploaded","See the product uploaded",res.extraData.PRODUCT_ID);
      }else{
        console.log(res);
        this.presentAlert("Error","Something went wrong","Fill details properly",null);
      }
    });

  }


  async presentAlert(head,subHead,msg,pid) {
    let btnText:string;
    if(pid==null){
      btnText = "Retry";
    }else{
      btnText = "Show Product";
    }
    const alt = await this.alert.create({
      header: head,
      subHeader: subHead,
      message: msg,
      buttons: [
        {
          text: btnText,
          role: 'Ok',
          cssClass: 'secondary',
          handler: (handle) => {
            if(pid==null){
              console.log("Something Not Working")
            }else{
              console.log(pid);
            // this.presentToast("Product Uploaded");
            this.router.navigate(['/home','product',pid]);
            }
            
          }
        }
      ]
    });

    await alt.present();
  }

  async presentLoading(msg) {
    const lctrl = await this.loadctrl.create({
      message: msg,
    });

    await lctrl.present();
  }

  async presentToast(msg) {
    const toast = await this.toastctrl.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }


}
