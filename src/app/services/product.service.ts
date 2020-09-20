import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // urls
  ALL_PRODUCTS_URL:string = "https://damp-bayou-49178.herokuapp.com/product/showAll"; 
  PRODUCT_BY_ID:string = "https://damp-bayou-49178.herokuapp.com/product"

  constructor(private http: HttpClient) { }

   allProduct():Observable<any>{
    let httpOptions = {
      headers : new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return  <any>this.http.get(this.ALL_PRODUCTS_URL,httpOptions);
  }

  getProductByID(pid:string):Observable<any>{
    let httpOptions = {
      headers : new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      params: new HttpParams().append('productId',pid)
    };

    return <any>this.http.get(this.PRODUCT_BY_ID,httpOptions);
  }

}
