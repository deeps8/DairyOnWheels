import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {

  productDetails:any;
  products:any;
  loading:boolean=false;
  extraloading:boolean=false;
  constructor(private route: ActivatedRoute,
              private productService: ProductService) {

   }

  ngOnInit() {
    this.route.params.subscribe(params=>{
      if(params['pid']){
        this.productService.getProductByID(params['pid']).subscribe(res=>{
          if(res.successCode==="API_SUCCESS"){
            this.productDetails = res.extraData.PRODUCT;
            console.log(this.productDetails);
            this.loading=true;
          }else{
            console.log("No data");
          }
        })
      }
    });

    this.getAllProduct();

  }


  getAllProduct(){
    this.productService.allProduct().subscribe(res=>{
      if(res.successCode === "API_SUCCESS"){
        this.products = res.extraData.PRODUCT;
        this.extraloading = true;
        console.log(this.products);
      }
    });
  }

}
