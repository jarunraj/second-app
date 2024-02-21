import { Component } from '@angular/core';
import { item } from '../model/item';


@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrl: './binding.component.css'
})
export class BindingComponent {
  topic:string = "Angular 10";
  productId:number = 123456;
  description:string = "Apple Mac Book";
  qty:number = 100;
  price:number = 20000;
  available:string = "green";
  notavailable:string = "red";
  delivery:string = "red";
  isMember:boolean = false;
  isQtyAvailable:boolean = this.qty>0;
  orderedQty:number = 0;

  takeOrder():void{
    console.log(this.orderedQty + " Order(s) Placed");
  }

  products = [
    {"id":1,"name":"Licensed Frozen Hat","description":"Incidunt et magni","price":"170.00","quantity":56840},
    {"id":2,"name":"Rustic Concrete Chicken","description":"Sint libero mollitia","price":"302.00","quantity":9358},
    {"id":3,"name":"Fantastic Metal Computer","description":"In consequuntur cupiditat","price":"279.00","quantity":90316},
    {"id":4,"name":"Refined Concrete Chair","description":"Saepe nemo praesentium","price":"760.00","quantity":5899}
  ];

items : item[] = [
new item(1, "Apple iphone 14", "Smart Phone", 78000, 5),
new item(2, "Samsung Galaxy S23", "Smart Phone", 79000, 10),
new item(3, "OnePlus 12", "Smart Phone", 65000, 3)
];
  
}
