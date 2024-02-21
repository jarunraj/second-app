import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../model/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
 
  constructor(private http:HttpClient) { }
  
  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>("http://localhost:9090/product/api.1.0/allproducts");
  }

  getProductById(id:number):Observable<Product>{
    return this.http.get<Product>("http://localhost:9090/product/api.1.0/productid/"+String(id));
  }

  saveProduct(product:Product):Observable<Object>{
    return this.http.post("http://localhost:9090/product/api.1.0/addproduct", product);
  }

  updateProduct(product:Product):Observable<Object>{
    return this.http.put("http://localhost:9090/product/api.1.0/modifyproduct", product);
  }
}
