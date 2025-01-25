import { Component,OnInit } from '@angular/core';
import { ProductService } from './product.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';

  products:any[]=[];

  constructor(private productService:ProductService){};

  ngOnInit():void{
    this.products=this.productService.products
  }


  onClick(){
    
  }




}
