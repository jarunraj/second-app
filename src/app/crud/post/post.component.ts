import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/Product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
  
  protected product:Product = new Product();
  
  constructor(private productservice:ProductService) {}

  saveProduct(){
    this.productservice.saveProduct(this.product)
    .subscribe((data)=>console.log(data)
    , error=>console.log(error));
  }

  onSubmit(){
    this.saveProduct();
    this.product.pdescription = "";
    this.product.pamount = 0;
  }
  
}
