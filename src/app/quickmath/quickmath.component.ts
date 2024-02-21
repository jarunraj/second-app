import { Component } from '@angular/core';

@Component({
  selector: 'app-quickmath',
  templateUrl: './quickmath.component.html',
  styleUrl: './quickmath.component.css'
})
export class QuickmathComponent {  

  a:number = 0;
  b:number = 0;
  result:number = 0;

  add(a:number, b:number):void{
    this.result = a+b;
  }
  subtract(a:number, b:number):void{
    this.result = a-b;
  }
  multiply(a:number, b:number):void{
    this.result = a+b;
  }
  divide(a:number, b:number):void{
    if(b)
      this.result = a/b;
    else
      this.result = 0;
  }
}
