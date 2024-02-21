import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../model/Product';
 
@Component({
  selector: 'app-fetch',
  templateUrl: './fetch.component.html',
  styleUrl: './fetch.component.css'
})
export class FetchComponent {
  products:Product[]=[];
  constructor(private service:ProductService){
    
  }
  ngOnInit():void{
    console.log("From OnInit()");
    this.products=this.getProducts();
  }
  
  getProducts():any{
    this.service.getProducts().subscribe((products)=>{
      console.log(products);
      this.products=products;
 
    });
  }
}