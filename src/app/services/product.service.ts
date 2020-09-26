import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  // urls
  ALL_PRODUCTS_URL: string = "https://damp-bayou-49178.herokuapp.com/product/showAll";
  PRODUCT_BY_ID: string = "https://damp-bayou-49178.herokuapp.com/product";

  // virtual cart vars
  virtualCartItems: Array<any> = [];

  constructor(private http: HttpClient) {
    
    //getting cart items from localStorage (Virtual Cart)
    if (localStorage.getItem("virtualCart")) {

      this.virtualCartItems = JSON.parse(localStorage.getItem("virtualCart"));
      //console.log(this.virtualCartItems);

    }

  }


  //getting all products from API call 
  allProduct(): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      }),
    };

    return <any>this.http.get(this.ALL_PRODUCTS_URL, httpOptions);
  }


  // getting the a single product by PROUCT_ID from API call
  getProductByID(pid: string): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      }),
      params: new HttpParams().append("productId", pid),
    };

    return <any>this.http.get(this.PRODUCT_BY_ID, httpOptions);
  }


  //functions related to VirtualCart
  checkItemInVCart(pid: string): number {
    // will return the quantity of that product in Vcart
    return this.virtualCartItems.findIndex((el) => {
      return el.product.productId == pid;
    });
  }

  addItemToVcart(product: any, operation: boolean): void {
    let pid = product.productId;
    if (this.checkItemInVCart(pid) < 0) {
      
      // will push new items to array of Vcart
      let newItem = {
        product: product,
        quantity: 1,
      };
      this.virtualCartItems.push(newItem);

    } else {

      //increasing the quantity of the Cart items if present
      if (operation) {
        ++this.virtualCartItems[this.checkItemInVCart(pid)].quantity;
      } else {

        //decreasing the quantitty of the Crt items if present or remove if 1 item
        if (--this.virtualCartItems[this.checkItemInVCart(pid)].quantity == 0)
          var sliced = this.virtualCartItems.splice(
            this.checkItemInVCart(pid),
            1
          );
      }
    }
  }


}
