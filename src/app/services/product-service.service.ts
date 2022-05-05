import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  url = 'http://localhost:6969/products'
  constructor(private product:HttpClient) { }

  getproducts(){
    return this.product.get(this.url)
  }

  getproduct(prodid:number){
    return this.product.get(`${this.url}/${prodid}`)
  }
}
