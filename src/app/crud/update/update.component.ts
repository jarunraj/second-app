import { Component } from '@angular/core';
import { Product } from '../../model/Product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent {
  protected product:Product = new Product();
  
  constructor(private productservice:ProductService) {}

  updateProduct(){
    this.productservice.updateProduct(this.product)
    .subscribe((data)=>console.log(data)
    , error=>console.log(error));
  }

  // getProductById(id:number):any{
  //   this.productservice.getProductById(id).subscribe((product)=>{
  //     console.log(product);
  //     this.product=product;
 
  //   });
  // }

  onSubmit(){
    this.updateProduct();
    this.product.pdescription = "";
    this.product.pamount = 0;
  }
  // onClick(){
  //   this.productservice.getProductById(this.product.pid);
  // }
}
